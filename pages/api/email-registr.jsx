import path from "path";
import fs from "fs";

// fs module allows to read and overwrite a file's data

//cwd==>access to the current working directory [root app]

// access data through path
function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

//extract data (` all events`) and turn it into a js object
function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  
  //destructuring method that's inside request
  const { method } = req;

  const filePath = buildPath();

  const { events_categories, allEvents } = extractData(filePath);

  //res 404 if there's no allEvents
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    //check format email is ok
    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
    }

    //all events- map and identify eventId
    //add email into email-registr
    //only if email doesn't exists
    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(409).json({
            message: "This email has already been registered",
          });
          return ev;
        }
        return { 
          //spread operator
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    //update database
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    res.status(201).json({
      message: `You've been successfully registered with the email: ${email} for the event: ${eventId}`,
    });
  }
}
