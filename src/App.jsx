import { useState } from "react";

const App = () => {
 const Questions = [
  {
    question: "How can you ensure that the vehicle has passed an annual inspection?",
    options: [
      "A valid inspection sticker is attached to the vehicle",
      "Does not require proof",
      "As stated by the operator",
      "Has to be forwarded to MTO (Ministry of Transportation)"
    ],
    answer: "A valid inspection sticker is attached to the vehicle"
  },

  {
    question: "A police or appointed ministry officer has the authority to perform a safety inspection:",
    options: [
      "Only at an inspection station",
      "At any time and any location",
      "Only on public roadway",
      "During daylight hours only"
    ],
    answer: "At any time and any location"
  },

  {
    question: "A properly completed daily inspection report contains:",
    options: [
      "Appropriate schedule",
      "Daily log",
      "The signature of the driver or person completing the report",
      "Delivery schedule"
    ],
    answer: "The signature of the driver or person completing the report"
  },

  {
    question: "You must ensure that the following items are secure on the vehicle:",
    options: [
      "Only items being transported for paid compensation",
      "The entire load including items such as gas cans and wheel chocks",
      "Only the load and direct attachments",
      "None, load security is the responsibility of operator not driver"
    ],
    answer: "The entire load including items such as gas cans and wheel chocks"
  },

  {
    question: "A front tire fails an inspection if the tread on two adjacent grooves anywhere on the tire are:",
    options: [
      "Less than 1.5 millimetres (0.06 inches)",
      "Less than 3 millimetres (0.12 inches)",
      "Less than 6 millimetres (0.24 inches)",
      "Less than 15 millimetres (0.59 inches)"
    ],
    answer: "Less than 3 millimetres (0.12 inches)",
  },

  {
    question: "What is the minimum number of consecutive off-duty hours you must take after accumulating 13 hours driving time?",
    options: [
      "7 hours",
      "8 hours",
      "9 hours",
      "10 hours"
    ],
    answer: "8 hours"
  },

  {
    question: "Three of the following four are good practices before backing. Which is not?",
    options: [
      "Sound horn",
      "Inform operator or complete paperwork",
      "Turn off radio/phone",
      "Open windows"
    ],
    answer: "Inform operator or complete paperwork"
  },

  {
    question: "Which of the following steps do you perform after you raise and secure the landing gear?",
    options: [
      "Perform tug test to check connection",
      "Supply air to trailer and test service brake",
      "Visual inspection on fifth wheel connection",
      "Attach air and electric lines to trailer"
    ],
    answer:  "Supply air to trailer and test service brake",
  },

  {
    question: "After the jaws lock when coupling, you should:",
    options: [
      "Perform tug test, then visually confirm coupling is secure",
      "Inspect lights and drive away",
      "Rely on fellow driver to inspect the connection",
      "Raise the landing gear and drive away"
    ],
    answer: "Perform tug test, then visually confirm coupling is secure"
  },

  {
   image:"question10.jpg",
    question: "This sign means:",
    options: [
      "No truck over 6.5 metres in length in this lane",
      "No trucks taller than 6.5 metres permitted in this lane",
      "This lane is a truck route",
      "No truck in this lane"
    ],
    answer: "No truck over 6.5 metres in length in this lane",
  },

  {
    question: "After stopping on an uphill grade, when rejoining traffic you should:",
    options: [
      "Keep the clutch slipping while slowly accelerating",
      "Hold the vehicle using the parking brakes until the clutch engages",
      "Let the vehicle roll backwards before you engage the clutch",
      "Disengage the clutch while reviving the engine"
    ],
    answer: "Hold the vehicle using the parking brakes until the clutch engages"
  },

  {
    
    question: "The main reason you should check under the hood is:",
    options: [
      "To verify fluid levels",
      "To check spark plugs",
      "To ensure lightning system is functioning",
      "To verify engine compartments"
    ],
    answer: "To verify fluid levels"
  },

  {
     image:"question12.jpg",
    question: "This sign means:",
    options: [
      "No truck parking",
      "Truck route",
      "No trucks permitted",
      "Low bridge clearance"
    ],
    answer: "No trucks permitted",
  },

  {
    question: "When backing up the tractor to couple with the trailer, you must:",
    options: [
      "Back from the angle",
      "Ensure the fifth wheel slot is in line with the trailer kingpin",
      "Not use mirrors to confirm alignments",
      "Ensure the fifth wheel is touching and against the kingpin"
    ],
    answer: "Ensure the fifth wheel slot is in line with the trailer kingpin"
  },

  {
    question: "The maximum length of a combination vehicle is:",
    options: [
      "17 metres (56 feet)",
      "19 metres (62 feet)",
      "23 metres (75 feet)",
      "28 metres (92 feet)"
    ],
    answer: "23 metres (75 feet)"
  },

  {
    question: "Many commercial motor vehicles have a speed limiting system which limits the maximum speed to:",
    options: [
      "85 km per hr",
      "95 km per hr",
      "105 km per hr",
      "115 km per hr"
    ],
    answer: "105 km per hr"
  },

  {
    question: "Dangerous goods transported on Ontario's roads and highways are identified:",
    options: [
      "By markings and safety labels for each classification of dangerous goods",
      "Dangerous goods are not labelled",
      "With red circle",
      "With a green square"
    ],
    answer: "By markings and safety labels for each classification of dangerous goods"
  },

  {
    question: "If during the course of a trip you discover a minor defect, you must:",
    options: [
      "Record on a daily report, inform operator and monitor condition",
      "Record on a daily report for checking at next daily inspection",
      "Inform operator, no further action required",
      "Monitor vehicle condition, no further action required"
    ],
    answer: "Record on a daily report, inform operator and monitor condition"
  },

  {
    question: "Three of the following activities are considered on-duty, which one is off-duty:",
    options: [
      "Time spent in a sleeper berth",
      "Driving",
      "Loading and unloading",
      "Performing a daily inspection"
    ],
    answer: "Time spent in a sleeper berth"
  },

  {
    question: "When making a right turn to prevent the wheels from going over the curb or sidewalk, you should:",
    options: [
      "Sound the horn",
      "Proceed well into the intersection before turning right",
      "Activate the four-way flashers",
      "Flash the rear brake lights"
    ],
    answer: "Proceed well into the intersection before turning right"
  },

  {
    question: "After a daily inspection, you discover the vehicle does not have any working brake lamps. What must you do:",
    options: [
      "No further action is required",
      "Record the minor defect and proceed while monitoring the condition of the vehicle",
      "Record the major defect and proceed",
      "Record the major defect and do not operate the vehicle until the defect is repaired"
    ],
    answer: "Record the major defect and do not operate the vehicle until the defect is repaired"
  },

  {
    question: "You can be required to attend a truck inspection station at the request of a:",
    options: [
      "Mechanic",
      "Fellow truck driver",
      "Tow truck driver",
      "Police officer"
    ],
    answer: "Police officer"
  },

  {
    question: "Before reversing you should:",
    options: [
      "Exit the vehicle and check the path the vehicle will take",
      "Flash the brake lights only",
      "Sound horn only",
      "Check the rear view mirrors only"
    ],
    answer: "Exit the vehicle and check the path the vehicle will take"
  },

  {
    question: "When your wheels have been in for service, it is important that you:",
    options: [
      "Tell the wheel installer to tighten the wheels to a level higher than specification",
      "Tell the wheel installer to use the lubricant",
      "Have the securement rechecked after driving between 80 km and 160 km",
      "Inspect the wheels the following day"
    ],
    answer: "Have the securement rechecked after driving between 80 km and 160 km"
  },

  {
    question: "You cannot drive a commercial motor vehicle after accumulating how many on-duty hours in a seven day cycle:",
    options: [
      "50 hours",
      "60 hours",
      "70 hours",
      "80 hours"
    ],
    answer: "70 hours"
  },

  {
    question: "When approaching a roundabout you must:",
    options: [
      "Stop prior to roundabout to perform traffic check",
      "Ensure your vehicle is in the appropriate lane for both entry and exit",
      "Enter directly beside another vehicle already in a roundabout",
      "Increase speed to enter the roundabout"
    ],
    answer: "Ensure your vehicle is in the appropriate lane for both entry and exit"
  },

  {
    question: "Anti-lock braking systems (ABS):",
    options: [
      "Prevent wheel lock and may reduce steering control",
      "Cause wheel lock and may not shorten vehicle stopping distance",
      "Prevent wheel lock and but may not shorten vehicle stopping distance",
      "Cause wheel lock to shorten vehicle stopping distance"
    ],
    answer: "Prevent wheel lock and but may not shorten vehicle stopping distance"
  },

  {
    question: "The maximum width of a commercial motor vehicle, including the load, shall not exceed:",
    options: [
      "1.6 metres (5.2 feet)",
      "2.0 metres (6.5 feet)",
      "2.6 metres (8.5 feet)",
      "5.0 metres (16.4 feet)"
    ],
    answer: "2.6 metres (8.5 feet)"
  },

  {
    
    question: "When approaching an intersection and you notice the roadway beyond is blocked with traffic, you should:",
    options: [
      "Sound horn to warn vehicles ahead to move on",
      "Keep as close as possible to the vehicle ahead",
      "Stop before entering the intersection and wait until traffic ahead moves on",
      "Proceed into the intersection until the traffic ahead clears"
    ],
    answer: "Stop before entering the intersection and wait until traffic ahead moves on"
  },

  {
     image:"question30.jpg",
    question: "This sign means:",
    options: [
      "Truck overturning",
      "Trucks carrying dangerous goods permitted",
      "Black diamond route",
      "Track route"
    ],
    answer: "Trucks carrying dangerous goods permitted",
  },

  {
    question: "Which of the following items are checked at a truck inspection station:",
    options: [
      "Vehicle is clean",
      "Fluids levels",
      "Height, length and width of the load",
      "Sealed cargo"
    ],
    answer: "Height, length and width of the load"
  },

  {
    question: "The driver of which of the following vehicles must adhere to hours of service regulations:",
    options: [
      "Commercial motor vehicles over 4500 kg",
      "Tow trucks over 3000 kg",
      "Transit buses over 3500 kg",
      "Motor homes over 5000 kg"
    ],
    answer: "Commercial motor vehicles over 4500 kg"
  },

  {
    question: "To ensure brakes are functioning normally, you should test the brakes:",
    options: [
      "Whenever convenient",
      "At the first intersection",
      "After the first 10 km of operation",
      "Immediately after the vehicle is underway"
    ],
    answer: "Immediately after the vehicle is underway"
  },

  {
    question: "The easiest and safest backing manoeuvre is:",
    options: [
      "Straight backing",
      "Parallel backing",
      "Alley dock backing",
      "Offset drivers side backing"
    ],
    answer: "Straight backing"
  },

  {
    question: "As a driver you should minimize possible development of a dangerous situation by:",
    options: [
      "Driving only during daylight hours",
      "Checking traffic as far down the roadway as possible",
      "Keeping your attention focused immediately in front of your vehicle",
      "Driving only during night time hours"
    ],
    answer: "Checking traffic as far down the roadway as possible"
  },

  {
    question: "When uncoupling a trailer, after having lowered the landing gear you should:",
    options: [
      "Test trailer brake lights",
      "Apply the tractor protection valve",
      "Disconnect air and electrical connections and stow them",
      "Lower the fifth wheel"
    ],
    answer: "Disconnect air and electrical connections and stow them"
  },

  {
    question: "A licensed driver learning to operate a commercial motor vehicle must:",
    options: [
      "Obtain permission from the ministry before making arrangements for instruction",
      "Drive only during daylight hours",
      "Own a commercial motor vehicle",
      "Be accompanied by a driver who is licensed to drive that vehicle"
    ],
    answer:"Be accompanied by a driver who is licensed to drive that vehicle",
  },

  {
    
    question: "When the driver of another vehicle is about to overtake and pass your vehicle, you must:",
    options: [
      "Move to the right and allow such vehicle to pass",
      "Signal the other driver not to pass",
      "Move to the left to prevent passing",
      "Speed up so that passing is not necessary"
    ],
    answer: "Move to the right and allow such vehicle to pass"
  },

  {
     image:"question38.jpg",
    question: "This sign means:",
    options: [
      "Cement factory ahead",
      "Industrial zone on the right",
      "Truck entrance on the right side of the road ahead",
      "Construction zone ahead"
    ],
    answer: "Truck entrance on the right side of the road ahead"
  },

  {
    question: "When rounding a right curve on a highway with a tractor-trailer, you should:",
    options: [
      "Flash the brake lights",
      "Keep the front of the vehicle close to the right edge of the highway",
      "Accelerate to carry momentum into the curve",
      "Keep the front wheels to the left side of the lane"
    ],
    answer: "Keep the front wheels to the left side of the lane"
  },

  {
    question: "If driving over the centre line while making a right hand turn, you must:",
    options: [
      "Only signal the turn and check the mirrors",
      "After signalling, immediately take the right-of-way",
      "Sound the horn and move quickly to straddle the lanes",
      "Yield to traffic, signal the turn and ensure a safe manoeuvre"
    ],
    answer: "Yield to traffic, signal the turn and ensure a safe manoeuvre"
  },

  {
    question: "If during the course of a trip you discover a minor defect, you must:",
    options: [
      "Record on daily report, inform operator and monitor condition",
      "Record on daily report for checking at next daily inspection",
      "Inform operator, no further action required",
      "Monitor vehicle condition, no further action required"
    ],
    answer: "Record on daily report, inform operator and monitor condition"
  },

  {
     
    question: "Which of the following is true when driving in a roundabout:",
    options: [
      "Requires a much faster speed",
      "Other drivers entering after you have the right of way",
      "Larger vehicles always have the right of way",
      "The vehicle in the roundabout has right of way"
    ],
    answer: "The vehicle in the roundabout has right of way"
  },

  {
     image:"question43.jpg",
    question: "This sign means:",
    options: [
      "Steep downgrade ahead",
      "Apply brakes on downhill",
      "8% of vehicle must slow down",
      "Vehicles must slow down by 8%"
    ],
    answer: "Steep downgrade ahead"
  },

  {
    question: "The main reason you should check under the hood is:",
    options: [
      "To verify fluid levels",
      "To check spark plugs",
      "To ensure lighting system is functioning",
      "To verify engine compartments"
    ],
    answer: "To verify fluid levels"
  },

  {
    question: "When flares or reflectors are required to mark a disabled commercial motor vehicle on a highway, you must place them:",
    options: [
      "15 metres (50 feet) to front and rear",
      "30 metres (100 feet) to front and rear",
      "60 metres (200 feet) to front and rear",
      "90 metres (300 feet) to front and rear"
    ],
    answer: "30 metres (100 feet) to front and rear"
  },

  {
    question: "What documentation is not required by the highway traffic act to be carried in a commercial motor vehicle?",
    options: [
      "The legible copy of the CVOR certificate",
      "The vehicle registration or a true copy",
      "Original insurance certificate",
      "Safety standard certificate"
    ],
    answer:   "Safety standard certificate"
  },

  {
    question: "After you detect and record a major defect on your daily inspection report, you must:",
    options: [
      "Inform the operator and do not operate the vehicle until defect is repaired",
      "Inform the operator and proceed",
      "Schedule the repair and proceed",
      "No further action is required"
    ],
    answer: "Inform the operator and do not operate the vehicle until defect is repaired"
  },

  {
    question: "Who is permitted to change a tire on a commercial motor vehicle?",
    options: [
      "Driver",
      "Tow truck driver",
      "Certified tire installer",
      "Owner/operator"
    ],
    answer: "Certified tire installer"
  },

  {
    question: "When daily log is required, you must track:",
    options: [
      "On-duty time only",
      "Off-duty only",
      "Driving time only",
      "All duty status time"
    ],
    answer: "All duty status time"
  },

  {
    question: "Before descending a steep hill, a good safe driving practice is to:",
    options: [
      "Place the gearshift in neutral",
      "Turn off the ignition",
      "Slow down or gear down",
      "Disengage the clutch and coast"
    ],
    answer: "Slow down or gear down"
  },

  {
    question: "Any load which projects from the rear of the vehicle by 1.5m (5 feet) or more must be marked with:",
    options: [
      "A yellow flag or marker in daylight, a blue light at night",
      "A red flag or marker in daylight, amber light at night",
      "A red flag or marker in daylight, a red light at night",
      "A blue flag or marker in daylight, a yellow light at night"
    ],
    answer: "A red flag or marker in daylight, a red light at night"
  },

  {
    question: "When starting to move a loaded tractor-trailer, the vehicle should be put in:",
    options: [
      "The highest available gear",
      "The lowest available gear",
      "Doesn't matter as long as the vehicle moves",
      "The second lowest available gear"
    ],
    answer: "The lowest available gear"
  },

  {
    question: "When uncoupling, the landing gear should:",
    options: [
      "Be lowered before brakes are set or wheels are chocked",
      "Be lowered onto firm ground",
      "Be lowered to raise trailer 6 inches (15 cm) above tractor height",
      "Be lowered after the trailer is uncoupled"
    ],
    answer: "Be lowered onto firm ground"
  },

  {
    question: "When are you required to carry the daily inspection report and applicable schedule?",
    options: [
      "When you are off-duty",
      "When vehicle is in for repair",
      "When the inspection sticker is less than one month old",
      "At all times"
    ],
    answer: "At all times"
  },

  {
   
    question: "What factor does not affect the maximum allowable gross weight of a commercial vehicle?",
    options: [
      "The weight allowed on the steering axle",
      "Cargo weight",
      "The distance between the axles",
      "The number of axles"
    ],
    answer: "Cargo weight"
  },

  {
    image:"question56.jpg",
    question: "This sign means:",
    options: [
      "A watch for tipping vehicles",
      "Speed bump ahead",
      "Slippery road ahead",
      "Slow down around curve"
    ],
    answer:  "Slow down around curve"
  },

  {
    question: "Allowing the clutch to slip will result in:",
    options: [
      "A faster acceleration when the vehicle is loaded",
      "Damage due to overheating",
      "A longer lasting clutch",
      "Electrical problems"
    ],
    answer: "Damage due to overheating"
  },

  {
    question: "When climbing a steep hill and your speed is reduced you should:",
    options: [
      "Continue driving and activate four-way flashers during ascent",
      "Continue a slow speed while ignoring following traffic",
      "Use left signal to let following traffic know that it is safe to pass",
      "Move to the left to prevent passing"
    ],
    answer: "Continue driving and activate four-way flashers during ascent"
  },

  {
    question: "Which of the following would be considered a minor defect when conducting a daily inspection?",
    options: [
      "Flat tire",
      "Exhaust leaks into the cab",
      "Broken leaf springs",
      "Broken clearance lamps"
    ],
    answer: "Broken clearance lamps"
  },

  {
    question: "What is the maximum number of hours you can drive in a day?",
    options: [
      "10 hours",
      "12 hours",
      "13 hours",
      "15 hours"
    ],
    answer: "13 hours"
  },

  {
    question: "To safely complete a turn you should:",
    options: [
      "Should horn to warn pedestrians",
      "Touch brakes to warn following vehicles",
      "Proceed slowly and monitor rear wheels of vehicle to avoid curbs, edges and other objects",
      "Alternate high and low beams to warn upcoming vehicles"
    ],
    answer: "Proceed slowly and monitor rear wheels of vehicle to avoid curbs, edges and other objects"
  },

  {
    question: "When you perform a daily inspection and find no defects, what must you do?",
    options: [
      "Skip the daily inspection report and proceed",
      "Complete and sign the daily inspection report",
      "Inform operator and do not proceed",
      "Call the mechanic and schedule an appointment"
    ],
    answer: "Complete and sign the daily inspection report"
  },

  {
    question: "The purpose of a central apron in a roundabout is to:",
    options: [
      "Create an extra lane for all traffic",
      "Add a visible finish to the inner and outer edges",
      "Allow rear wheels to rider over right hand or outside curb",
      "Allow the rear wheels to mount the centre portion of the roadway"
    ],
    answer: "Allow the rear wheels to mount the centre portion of the roadway"
  },

  {
    question: "When can you drive the vehicle after identifying a major defect?",
    options: [
      "Only after the defect is repaired",
      "Until end of day",
      "Until next daily inspection",
      "Only after it is reported"
    ],
    answer: "Only after the defect is repaired"
  },

  {
    question: "You must notice excessive lash or free play which may indicate a defect in:",
    options: [
      "Brake chamber",
      "Suspension",
      "Tire tread",
      "Steering."
    ],
    answer: "Steering."
  },

  {
     image:"question66.jpg",
    question: "This sign means:",
    options: [
      "No truck parking in this lane",
      "No trucks in this lane",
      "This lane is a truck route",
      "No buses in this lane"
    ],
    answer: "No trucks in this lane"
  },

  {
    question: "What is the maximum number of hours that a daily inspection report is valid for:",
    options: [
      "12 hours",
      "24 hours",
      "36 hours",
      "48 hours"
    ],
    answer: "24 hours"
  },

  {
    question: "You must inspect the load securement and make necessary adjustments after:",
    options: [
      "80 km",
      "100 km",
      "150 km",
      "300 km"
    ],
    answer: "80 km"
  },

  {
    question: "Who is responsible for ensuring that loads are secured while in operation:",
    options: [
      "The dispatcher",
      "The shipper",
      "The owner",
      "The driver"
    ],
    answer: "The driver"
  },

  {
    question: "A good safe driving practice on a multi-lane highway is to:",
    options: [
      "Manage your blind spot and keep adequate space",
      "Always drive slower than surrounding traffic to make it easier for traffic to pass",
      "Follow other vehicles as closely as possible to make it easier for traffic to pass",
      "Constantly change lanes"
    ],
    answer: "Manage your blind spot and keep adequate space"
  },

  {
    question: "To assist you in performing the daily inspection, it is necessary to:",
    options: [
      "Inspect only major fault areas",
      "Ignore items which have not been a problem",
      "Follow a systematic approach, inspection sheet or applicable schedule",
      "Memorize all the items to be checked"
    ],
    answer: "Follow a systematic approach, inspection sheet or applicable schedule"
  },

  {
    question: "Gross weight of a commercial motor vehicle means:",
    options: [
      "The weight of the trailer without the load",
      "The weight of the load",
      "The weight of the vehicle",
      "The combined weight of the vehicle and the load"
    ],
    answer: "The combined weight of the vehicle and the load"
  },

  {
    question: "Excessive free play or lash e.g. over 10cm (4 inches), may indicate to you that:",
    options: [
      "Steering needs repair or adjustment before proceeding",
      "Front tires are too small",
      "Minor defect should be noted",
      "No action is required"
    ],
    answer: "Steering needs repair or adjustment before proceeding"
  },

  {
    question: "When approaching a railway crossing and the signals lights are activated, you must stop:",
    options: [
      "5 metres from the nearest rail",
      "10 metres from the nearest rail",
      "15 metres from the nearest rail",
      "20 metres from the nearest rail"
    ],
    answer: "5 metres from the nearest rail"
  },

  {
    question: "The responsibility for the safe operating condition of a commercial motor vehicle is that of:",
    options: [
      "The police and the driver",
      "The operator and the driver",
      "The operator and the mechanic",
      "The mechanic and the driver"
    ],
    answer: "The operator and the driver"
  },

  {
    question: "The key principle in loading any cargo on a commercial vehicle is to ensure:",
    options: [
      "Load is all the way to the back over rear axle",
      "Load is on driver side of trailer for ease of viewing",
      "Load is on the passenger side of the vehicle to increase field of view",
      "Load is balanced for safety and vehicle stability"
    ],
    answer: "Load is balanced for safety and vehicle stability"
  },

  {
    image:"question77.jpg",
    question: "This sign means:",
    options: [
      "No trucks on route",
      "No black diamond route",
      "Trucks carrying dangerous goods are not permitted",
      "No trucks overturning"
    ],
    answer: "Trucks carrying dangerous goods are not permitted"
  },

  {
    question: "The maximum height of a commercial motor vehicle, including the load is:",
    options: [
      "3.75 metres (12.3 feet)",
      "4.15 metres (13.6 feet)",
      "4.85 metres (15.9 feet)",
      "5.25 metres (17.2 feet)"
    ],
    answer: "4.15 metres (13.6 feet)"
  },

  {
    question: "If you are required to hook up a trailer at a remote location, you must:",
    options: [
      "Hook up the trailer and immediately start the trip",
      "Perform a daily inspection on the trailer before operating the vehicle",
      "Perform a quick check for visible defects",
      "Call the operator to determine the trailer's condition"
    ],
    answer: "Perform a daily inspection on the trailer before operating the vehicle"
  },

  {
    question: "You are required to ensure that the brakes on the vehicle are not out of adjustment:",
    options: [
      "It is not the driver's responsibility to ensure the brakes are in adjustment",
      "Once every 24 hours",
      "When you think the braking is inadequate",
      "At all times"
    ],
    answer: "At all times"
  },

  {
    question: "After coupling, if any space appears between the upper plate of the trailer and fifth wheel, this indicates that:",
    options: [
      "Landing gear can be raised",
      "Vehicle is ready to be driven",
      "Coupling is secure",
      "Coupling is not secure"
    ],
    answer: "Coupling is not secure"
  },

  {
    image:"question83.jpg",
    question: "This sign means:",
    options: [
      "Truck green routes",
      "No heavy trucks",
      "Trucks only",
      "Trucks permitted"
    ],
    answer: "Trucks permitted"
  },

  {
   image:"question84.jpg",
    question: "This sign means:",
    options: [
      "Drivers must not enter when lights flashing",
      "Inspection station closed when flashing",
      "All vehicles must report to inspection station",
      "All trucks must report to an inspection station when lights flashing"
    ],
    answer: "All trucks must report to an inspection station when lights flashing"
  },

  {
    image:"question85.jpg",
    question: "This sign means:",
    options: [
      "Report to truck inspection station if over given weight",
      "Maximum gross vehicle weight for a bridge",
      "Only vehicles above posted weight may proceed",
      "Minimum weight for route"
    ],
    answer: "Maximum gross vehicle weight for a bridge"
  },

  {
    question: "The person who cannot be charged with an offence for an overloaded vehicle is:",
    options: [
      "The driver",
      "The shipper",
      "The receiver",
      "The operator"
    ],
    answer: "The receiver"
  },
  {
      
      "question": "When reversing to couple a trailer, the fifth wheel opening must be in direct line with:",
      "options": [
       "The trailer apron plate",
        "The master link",
         "The landing gear",
        "The trailer kingpin"
      ],
      "answer":"The trailer kingpin"
    },
    {
     
      "question": "What distance must you maintain between commercial motor vehicle travelling in the same direction on a highway?",
      "options": [
      "30 metres (100 feet)",
       "60 metres (200 feet)",
        "90 metres (300 feet)",
       "150 metres (500 feet)"
      ],
      "answer": "60 metres (200 feet)",
    },
    {
    
      "question": "When driving larger vehicles you must always be aware of the vehicle's height and to ensure:",
      "options": [
     "Adequate clearance is maintained at bridges and Overpasses.",
       "A proper daily inspection is performed.",
   "The proper license fees are Paid.",
        "Proper tires are on the vehicle."
 ],
      "answer": "Adequate clearance is maintained at bridges and Overpasses.",
    },
    {
    
      "question": "A longer wheel base between the front wheels and the rear wheels of the vehicle creates:",
      "options": [
       "More off-tracking.",
        "The same off-tracking.",
        "Less off-tracking.",
        "No change in off-tracking."
      ],
      "answer": "More off-tracking.",
    },
    {
    
      "question": "Before moving the tractor to couple with the trailer you must:",
      "options": [
        "Inspect fifth wheel, trailer couplers and connect.",
      "Listen for fifth wheel to latch into its locked position.",
   "Ensure fifth wheel sits above the kingpin.",
        "Ensure trailer lights are activated."
      ],
      "answer": "Inspect fifth wheel, trailer couplers and connect.",
    },
    {
    
      "question": "Prior to coupling you should check to ensure:",
      "options": [
         "Fifth wheel is lying flat and jaws are fully closed",
       "Jaws are fully closed",
        "The fifth wheel is lying flat",
       "The fifth wheel is tilted back and jaws are fully opened"
      ],
      "answer": "The fifth wheel is tilted back and jaws are fully opened"
    },
    {
     
      "question": "A rear tire fails an inspection if the tread on two adjacent grooves anywhere on the tire are:",
      "options": [
        "Less than 1.5 millimetres (0.06 inches)",
       "Less than 3 millimetres (0.12 inch)",
       "Less than 6 millimetres (0.24 inches)",
        "Less than 15 millimetres (0.59 inches)"
      ],
      "answer": "Less than 1.5 millimetres (0.06 inches)",
    },
    {
      
      "question": "In order to transport dangerous goods, you must:",
      "options": [
       "No qualification is required, just be very careful",
        "Be trained and certified by your employer",
      "Hold a dangerous goods license or endorsement",
     "Be an employee of the manufacturer only"
      ],
      "answer": "Be trained and certified by your employer",
    }
  
];
 const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectOption, SetselectOption] = useState(null);
  const [correct, SetCorrect] = useState(null);
  const [score, SetScore] = useState(0);
  const [answered, Setanswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  if (quizFinished) {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-xl p-8 text-center">

        <h1 className="text-3xl font-bold text-blue-600">
          🎉 Test Completed!
        </h1>

        <p className="text-gray-600 mt-4">
          You completed all {Questions.length} questions.
        </p>

        <div className="bg-green-50 rounded-xl p-6 mt-6">
          <p className="text-gray-600 font-semibold">
            Your Score
          </p>

          <p className="text-5xl font-bold text-green-600 mt-2">
            {score} / {Questions.length}
          </p>

          <p className="text-xl font-semibold text-gray-700 mt-3">
            {Math.round((score / Questions.length) * 100)}% Correct
          </p>
        </div>

        <button
          onClick={() => {
            setCurrentQuestion(0);
            SetselectOption(null);
            SetCorrect(null);
            Setanswered(false);
            SetScore(0);
            setQuizFinished(false);
          }}
          className="w-full mt-6 bg-orange-500
                     hover:bg-orange-600
                     text-white font-bold
                     py-3 rounded-xl shadow-md"
        >
          🔄 Restart Quiz
        </button>

      </div>
    </div>
  );
}

  return (
<div
  className="bg-green-50 w-full max-w-4xl min-h-screen
             rounded-2xl p-4 sm:p-6 md:p-8 mt-5 mx-auto
             shadow-xl border border-green-200"
>
 <div className="mb-6">

 
 <div className="flex justify-end mb-4">
      <div
  className="bg-white px-4 py-2 rounded-xl
             shadow-md border border-blue-200
             transition-all duration-300
             hover:scale-105
             hover:shadow-xl"
>
<div className="w-full max-w-md mx-auto mt-4 p-5 bg-gradient-to-br from-amber-50 to-yellow-800 rounded-2xl border border-amber-200 shadow-lg hover:shadow-2xl transition-all duration-300">

  <div className="text-sm font-semibold text-gray-600 mb-3">
    <h5 className="text-center bg-green-400 text-black text-2xl  ">Web Developer</h5><hr />
    <span className="text-gray-700 ">📞 Contact:</span>
    <span className="text-gray-900 ml-2">
      +919463446881
    </span>
  </div>

  <div className="text-xl text-blue-700 font-bold mb-2 hover:text-blue-900 transition">
    👤 Waris Singh
  </div>

  <div className="text-sm text-white font-semibold hover:text-green-800 transition cursor-pointer">
    📧 Asrboparai@gmail.com
  </div>

</div>
</div>
    </div>

     <div
      className="bg-white rounded-2xl shadow-md
                 p-5 border-l-4 border-blue-600"
    >
      <h1
        className="text-2xl sm:text-3xl
                   text-blue-600 font-bold text-center"
      >
        PRACTICE QUESTION
        <br />
        CLASS A WRITTEN TEST
      </h1>

    <p className="text-center text-gray-500 mt-2 font-medium">
        Practice • Learn • Pass
      </p>
    </div>
  </div>

     <div className="flex justify-center mt-4">
    <div
      className="bg-white border-2 border-blue-500
                 rounded-full px-6 py-3 shadow-md"
    >
      <p className="text-lg sm:text-xl font-bold text-blue-600">
        Question{" "}
        <span className="text-orange-600">
          {currentQuestion + 1}
        </span>

        <span className="text-gray-500">
          {" "}
          / {Questions.length}
        </span>
      </p>
    </div>
  </div>

<div
  className="mt-6 bg-white rounded-2xl
             p-5 shadow-md border border-orange-100"
>
  <p className="text-sm font-bold text-orange-500 mb-2">
    QUESTION
  </p>

  {/* IMAGE */}
  {Questions[currentQuestion].image && (
    <div className="flex justify-center mb-6">
      <div className="w-full max-w-md bg-gray-50 border-2 border-gray-200 rounded-2xl p-4 shadow-md">
        <img
          className="w-full h-56 sm:h-64 md:h-72 object-contain rounded-xl"
          src={Questions[currentQuestion].image}
          alt="Question image"
        />
      </div>
    </div>
  )}

  {/* QUESTION TEXT */}
  <h2
    className="text-lg sm:text-xl md:text-2xl
               text-gray-800 font-bold leading-relaxed"
  >
    {Questions[currentQuestion].question}
  </h2>
</div>
 <div className="flex flex-col gap-3 mt-5">

    {Questions[currentQuestion].options.map((items, index) => (

      <button
        key={index}

        disabled={answered}

        onClick={() => {

          if (answered) return;

          SetselectOption(items);
          Setanswered(true);

          if (
            items === Questions[currentQuestion].answer
          ) {
            SetCorrect("Correct");
            SetScore((prevScore) => prevScore + 1);
          } else {
            SetCorrect("Wrong");
          }
        }}
    className={`w-full text-left p-4 border-2 rounded-xl
font-semibold transition-all duration-200
 ${
            answered &&
            items === Questions[currentQuestion].answer
              ? "bg-green-500 border-green-600 text-white shadow-lg"
     : answered &&
                items === selectOption
     ? "bg-red-500 border-red-600 text-white shadow-lg"
    : "bg-white border-gray-200 text-gray-800   hover:border-blue-500 hover:bg-blue-50 hover:translate-x-1"
}`}
  > 
    {items}
  </button>
))}

<div className="flex gap-3 mt-6">


  <button
    disabled={currentQuestion === 0}
    onClick={() => {
      if (currentQuestion === 0) return;

      setCurrentQuestion(currentQuestion - 1);
      SetselectOption(null);
      SetCorrect(null);
      Setanswered(false);
    }}
    className={`w-1/2 py-3 rounded-xl font-bold shadow-md
      transition-all duration-200
      ${
        currentQuestion === 0
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-orange-500 hover:bg-orange-600 text-white active:scale-95"
      }`}
  >
    ← Previous
  </button>



  <button
    onClick={() => {

      if (!answered) return;

      if (currentQuestion === Questions.length - 1) {
        setQuizFinished(true);
        return;
      }

      setCurrentQuestion(currentQuestion + 1);

      SetselectOption(null);
      SetCorrect(null);
      Setanswered(false);

    }}
    className="w-1/2 bg-blue-600
               hover:bg-blue-700 active:scale-95
               text-white font-bold
               py-3 rounded-xl shadow-md
               transition-all duration-200"
  >
    {currentQuestion === Questions.length - 1
      ? "Submit Test"
      : "Next Question →"}
  </button>

</div>






<h1
  className={`text-4xl font-bold mt-5 ${
    correct === "Correct"
      ? "text-green-600"
      : "text-red-600"
  }`}
>
  {correct}
</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

  <div className="bg-white border-l-4 border-blue-500
                  rounded-xl p-4 shadow-md
                  hover:shadow-lg transition duration-300">
    <p className="text-sm text-gray-500 font-semibold uppercase">
      Selected Answer
    </p>

    <p className="text-lg font-bold text-blue-700 mt-1">
      {selectOption || "Not Answered"}
    </p>
  </div>



 <div className="bg-white border-l-4 border-green-500
                rounded-xl p-4 shadow-md
                hover:shadow-lg transition duration-300">

  <div className="flex justify-between items-center">
    <p className="text-sm text-gray-500 font-semibold uppercase">
      Current Score
    </p>

    <span className="text-xs bg-green-100 text-green-700
                     px-2 py-1 rounded-full font-bold">
      SCORE
    </span>
  </div>

  <div className="flex items-end gap-2 mt-2">
    <p className="text-3xl font-bold text-green-600">
      {score}
    </p>

    <p className="text-gray-500 font-semibold mb-1">
      / {Questions.length}
    </p>
  </div>

  <p className="text-sm text-gray-500 mt-1">
    {Math.round((score / Questions.length) * 100)}% Correct
  </p>
</div>

</div>
      </div>
    </div>
  );
};

export default App;