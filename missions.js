const missions = [
  {
    "id": 1,
    "title": "DESIGN A ONE-HANDED DESK TOOL",
    "description": "Design a small desk tool in Fusion 360 that can be picked up and used with one hand. Make it ergonomic, parametric and printable.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 2,
    "title": "MAKE A RIDICULOUSLY PREMIUM PEN STAND",
    "description": "Design a pen stand that looks like it belongs in a €500 designer office collection. Focus on proportion, fillets and clean geometry.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 3,
    "title": "MODEL AN OBJECT FROM MEMORY",
    "description": "Pick an object you use every day, hide it, and model it from memory. Compare your model with the real thing only when you're finished.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 4,
    "title": "DESIGN A SECRET COMPARTMENT",
    "description": "Create a small box or desk object with a hidden compartment that isn't obvious from the outside.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 5,
    "title": "MAKE A PARAMETRIC PHONE DOCK",
    "description": "Design a phone dock whose width, angle and case thickness can all be changed using named parameters.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 6,
    "title": "DESIGN A FUTURISTIC DOOR HANDLE",
    "description": "Invent a door handle for a spaceship, luxury hotel or cyberpunk apartment and render the final concept.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "3D DESIGN"
  },
  {
    "id": 7,
    "title": "MODEL A MINIATURE PIECE OF FURNITURE",
    "description": "Choose a chair, table or shelf and recreate it as a clean miniature CAD model with realistic proportions.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 8,
    "title": "DESIGN SOMETHING WITH ONLY THREE SKETCHES",
    "description": "Make a useful object while limiting yourself to three sketches. Let constraints and clever features do the work.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "3D DESIGN"
  },
  {
    "id": 9,
    "title": "TURN A LOGO INTO A 3D OBJECT",
    "description": "Choose a simple logo or symbol and transform its shapes into a functional 3D object rather than just extruding it.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 10,
    "title": "DESIGN THE BORED PROJECT ACCESSORY",
    "description": "Create an add-on for The Bored Project: cable guide, NFC cover, wall spacer, removable tray or something nobody has thought of yet.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D DESIGN"
  },
  {
    "id": 11,
    "title": "BUILD A PRINT-IN-PLACE HINGE",
    "description": "Design and print a hinge that comes off the build plate already assembled. Tune the clearance until it moves cleanly.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "3D PRINTING"
  },
  {
    "id": 12,
    "title": "PRINT A TOLERANCE TEST YOU DESIGNED",
    "description": "Make your own compact clearance test from 0.1 to 0.6 mm and discover what your printer actually likes.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D PRINTING"
  },
  {
    "id": 13,
    "title": "MAKE A FLEXIBLE OBJECT FROM RIGID PLA",
    "description": "Use geometry instead of flexible filament to design a spring, compliant clip or living hinge in PLA.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "3D PRINTING"
  },
  {
    "id": 14,
    "title": "PRINT THE SMALLEST USEFUL THING",
    "description": "Design something genuinely useful that uses less than 10 grams of filament.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "3D PRINTING"
  },
  {
    "id": 15,
    "title": "MAKE A TWO-COLOR OBJECT WITH ZERO WASTED SWAPS",
    "description": "Design a multicolor print where each color occupies separate Z ranges so the AMS needs as few swaps as possible.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "3D PRINTING"
  },
  {
    "id": 16,
    "title": "DESIGN A SNAP-FIT CONNECTION",
    "description": "Create two parts that click together without screws or glue. Print a small test before committing to the full design.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "3D PRINTING"
  },
  {
    "id": 17,
    "title": "MAKE A CUSTOM CABLE CLIP",
    "description": "Measure one cable you actually use and create a clip that holds it perfectly without crushing it.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "3D PRINTING"
  },
  {
    "id": 18,
    "title": "PRINT A MECHANICAL FIDGET",
    "description": "Design a satisfying clicker, slider, spinner or ratchet mechanism instead of downloading one.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "3D PRINTING"
  },
  {
    "id": 19,
    "title": "MAKE A NO-SUPPORT CHALLENGE PRINT",
    "description": "Design an interesting object with overhangs engineered so it needs absolutely no support material.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D PRINTING"
  },
  {
    "id": 20,
    "title": "REPLACE A BORING HOUSEHOLD PART",
    "description": "Find a cap, hook, spacer, knob or clip around the house and make your own improved replacement.",
    "time": "1–3 HOURS",
    "difficulty": "MEDIUM",
    "category": "3D PRINTING"
  },
  {
    "id": 21,
    "title": "MAKE WATER LOOK EXPENSIVE",
    "description": "Photograph a glass or bottle of water like it is a luxury advertisement using only lighting and composition.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 22,
    "title": "SHOOT ONE COLOR ONLY",
    "description": "Go out and make a 12-photo series where one chosen color is present in every frame.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 23,
    "title": "PHOTOGRAPH YOUR ROOM LIKE ARCHITECTURE",
    "description": "Pretend your room is being featured in an architecture magazine. Find five angles that make it look intentional.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 24,
    "title": "CREATE A FAKE ALBUM COVER",
    "description": "Take one original photo and turn it into an album cover for an artist that doesn't exist.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 25,
    "title": "MAKE SOMETHING TINY LOOK HUGE",
    "description": "Use perspective and a low camera angle to make a small everyday object look monumental.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 26,
    "title": "ONE LENS ONE HOUR",
    "description": "Pick one focal length and don't change it for an hour. Build a coherent mini photo series around that limitation.",
    "time": "1 HOUR",
    "difficulty": "EASY",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 27,
    "title": "CHASE REFLECTIONS",
    "description": "Take ten photos where the main subject is seen through glass, puddles, mirrors, metal or another reflective surface.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 28,
    "title": "RECREATE A PHOTO FROM LAST YEAR",
    "description": "Find one of your older photos and recreate it today, then deliberately improve lighting, framing and editing.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 29,
    "title": "MAKE A THREE-PHOTO STORY",
    "description": "Tell a complete beginning-middle-end story using exactly three photographs and no text.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 30,
    "title": "PHOTOGRAPH THE MOST BORING OBJECT YOU OWN",
    "description": "Choose something painfully ordinary and keep shooting until you produce one image you'd actually put in a portfolio.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTOGRAPHY"
  },
  {
    "id": 31,
    "title": "MAKE A 20-SECOND THRILLER",
    "description": "Shoot a tiny thriller with a setup, tension and payoff in twenty seconds. No dialogue allowed.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FILM"
  },
  {
    "id": 32,
    "title": "FILM AN OBJECT LIKE A CAR COMMERCIAL",
    "description": "Choose a completely unimpressive household object and give it dramatic tracking shots, sound design and absurdly serious editing.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FILM"
  },
  {
    "id": 33,
    "title": "MAKE A ONE-ROOM SHORT FILM",
    "description": "Create a complete 30–60 second film without leaving one room.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FILM"
  },
  {
    "id": 34,
    "title": "SHOOT A MATCH-CUT SEQUENCE",
    "description": "Create at least five shots that transition by matching shapes or movement between completely different objects.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "FILM"
  },
  {
    "id": 35,
    "title": "MAKE A SILENT FILM",
    "description": "Tell a short story using only visuals, music and sound effects. No spoken words and no explanatory captions.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FILM"
  },
  {
    "id": 36,
    "title": "CREATE A FAKE MOVIE TRAILER",
    "description": "Invent a movie that doesn't exist and make a 30-second trailer using footage you shoot today.",
    "time": "2–3 HOURS",
    "difficulty": "HARD",
    "category": "FILM"
  },
  {
    "id": 37,
    "title": "FILM A MORNING ROUTINE LIKE CINEMA",
    "description": "Turn an ordinary routine into a polished cinematic montage with close-ups, movement and sound design.",
    "time": "1–2 HOURS",
    "difficulty": "EASY",
    "category": "FILM"
  },
  {
    "id": 38,
    "title": "MAKE A PERFECT LOOP",
    "description": "Shoot and edit a video where the final frame flows seamlessly back into the first.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "FILM"
  },
  {
    "id": 39,
    "title": "CREATE A HORROR SCENE IN DAYLIGHT",
    "description": "Make something unsettling without darkness, jumpscares or fake blood. Use framing and sound instead.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "FILM"
  },
  {
    "id": 40,
    "title": "MAKE A 10-SHOT MASTERPIECE",
    "description": "You get exactly ten clips. Plan them, shoot them, and make the strongest edit you can without adding an eleventh.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FILM"
  },
  {
    "id": 41,
    "title": "BUILD A USELESS BUTTON",
    "description": "Make a beautiful webpage containing one button that does something hilariously unnecessary when pressed.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "CODING"
  },
  {
    "id": 42,
    "title": "CREATE A TINY BROWSER GAME",
    "description": "Build a one-screen game with one mechanic and a score. Make it playable before making it pretty.",
    "time": "1–3 HOURS",
    "difficulty": "MEDIUM",
    "category": "CODING"
  },
  {
    "id": 43,
    "title": "MAKE AN AUDIO VISUALIZER",
    "description": "Create a simple visualizer that reacts to microphone or audio input with shapes, bars or particles.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "CODING"
  },
  {
    "id": 44,
    "title": "BUILD A RANDOM CHALLENGE GENERATOR",
    "description": "Make a tiny generator for a topic other than boredom: photos, workouts, drawing prompts, meals or game challenges.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "CODING"
  },
  {
    "id": 45,
    "title": "MAKE A FAKE OPERATING SYSTEM",
    "description": "Create a webpage that looks and behaves like a tiny fictional desktop OS with draggable windows or fake apps.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "CODING"
  },
  {
    "id": 46,
    "title": "CODE A DIGITAL PET",
    "description": "Build a tiny creature with hunger, happiness or energy values and a few buttons to interact with it.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "CODING"
  },
  {
    "id": 47,
    "title": "MAKE A RIDICULOUS LOADING SCREEN",
    "description": "Spend an hour making the most unnecessarily cinematic loading animation possible.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "CODING"
  },
  {
    "id": 48,
    "title": "BUILD A PERSONAL COUNTDOWN",
    "description": "Create a polished countdown page for something you're looking forward to, with animations and changing messages.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "CODING"
  },
  {
    "id": 49,
    "title": "MAKE A KEYBOARD-SOUND WEB APP",
    "description": "Create a page that plays different satisfying sounds when you type, with selectable sound profiles.",
    "time": "2–3 HOURS",
    "difficulty": "HARD",
    "category": "CODING"
  },
  {
    "id": 50,
    "title": "CODE SOMETHING IN UNDER 100 LINES",
    "description": "Build a complete tiny tool or toy while keeping the JavaScript under 100 lines.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "CODING"
  },
  {
    "id": 51,
    "title": "REDESIGN YOUR DESKTOP FROM ZERO",
    "description": "Hide everything and rebuild your desktop layout around one visual theme, including wallpaper, icons and widgets.",
    "time": "1–2 HOURS",
    "difficulty": "EASY",
    "category": "PC"
  },
  {
    "id": 52,
    "title": "MAKE YOUR OWN WALLPAPER",
    "description": "Create a desktop wallpaper from one of your photos, a 3D render or an original graphic instead of downloading one.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "PC"
  },
  {
    "id": 53,
    "title": "CLEAN YOUR DIGITAL DESK",
    "description": "Turn your Downloads/Desktop chaos into a clean folder system and make it satisfying enough that you'll actually keep using it.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PC"
  },
  {
    "id": 54,
    "title": "BUILD A CUSTOM START PAGE",
    "description": "Make a browser homepage with your favorite links, clock, background and a ridiculously clean design.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "PC"
  },
  {
    "id": 55,
    "title": "CREATE A PC BENCHMARK POSTER",
    "description": "Benchmark your PC, then turn the results and hardware specs into a slick poster or dashboard.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "PC"
  },
  {
    "id": 56,
    "title": "MAKE A CUSTOM BOOT SOUND",
    "description": "Design a tiny startup sound for your fictional personal computer brand and pair it with a boot animation.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PC"
  },
  {
    "id": 57,
    "title": "DESIGN YOUR DREAM PC CASE",
    "description": "Sketch or model a PC case with no concern for whether anyone manufactures it. Solve airflow and I/O placement anyway.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "PC"
  },
  {
    "id": 58,
    "title": "MAKE A MAC VS PC DESKTOP CHALLENGE",
    "description": "Style your PC to borrow the best ideas from macOS without simply cloning it.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "PC"
  },
  {
    "id": 59,
    "title": "CREATE A ZERO-DISTRACTION MODE",
    "description": "Build a desktop/browser setup designed for one task only and remove every visual distraction you can.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PC"
  },
  {
    "id": 60,
    "title": "INVENT A FICTIONAL COMPUTER BRAND",
    "description": "Create its name, logo, flagship machine, wallpaper and one product advertisement.",
    "time": "2–3 HOURS",
    "difficulty": "MEDIUM",
    "category": "PC"
  },
  {
    "id": 61,
    "title": "REDESIGN A TERRIBLE REMOTE",
    "description": "Choose a remote control and redesign its button layout to make sense without adding more buttons.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 62,
    "title": "MAKE A POSTER FOR NOTHING",
    "description": "Design a serious, beautiful poster advertising an utterly ordinary event like making toast at 4 PM.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "DESIGN"
  },
  {
    "id": 63,
    "title": "REDESIGN A WATER BOTTLE",
    "description": "Create a bottle concept focused on one problem: grip, cleaning, carrying, pouring or storage.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 64,
    "title": "INVENT A NEW ROAD SIGN",
    "description": "Design a road-style sign for a modern problem that existing signs never had to explain.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "DESIGN"
  },
  {
    "id": 65,
    "title": "MAKE A ONE-FONT POSTER",
    "description": "Create a strong poster using only one font family, two sizes and no images.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 66,
    "title": "REDESIGN AN APP SCREEN",
    "description": "Pick one screen from an app you use and redesign it around what you actually care about.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 67,
    "title": "CREATE PACKAGING FOR A ROCK",
    "description": "Treat a random stone like a premium consumer product and design the box, label and marketing copy.",
    "time": "1–2 HOURS",
    "difficulty": "EASY",
    "category": "DESIGN"
  },
  {
    "id": 68,
    "title": "DESIGN A BETTER LIGHT SWITCH",
    "description": "Reimagine a light switch for darkness, accessibility or smart-home controls without making it confusing.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 69,
    "title": "MAKE A LOGO USING ONLY GEOMETRY",
    "description": "Invent a brand and create its mark using only circles, rectangles and straight lines.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 70,
    "title": "DESIGN A PRODUCT FROM THE YEAR 2040",
    "description": "Choose an everyday product and redesign what its 2040 version might realistically become.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "DESIGN"
  },
  {
    "id": 71,
    "title": "FIX ONE TINY ANNOYANCE",
    "description": "Walk around your room until you find something mildly annoying. Build, modify or improvise a physical fix today.",
    "time": "30–90 MIN",
    "difficulty": "EASY",
    "category": "MAKER"
  },
  {
    "id": 72,
    "title": "BUILD A CARDBOARD PROTOTYPE",
    "description": "Design an object and prototype it entirely from cardboard before touching CAD.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "MAKER"
  },
  {
    "id": 73,
    "title": "MAKE A DESK OBJECT FROM SCRAP",
    "description": "Use only materials you already have and build something useful for your desk.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "MAKER"
  },
  {
    "id": 74,
    "title": "CREATE A HIDDEN CABLE ROUTE",
    "description": "Find the ugliest cable in your setup and build a cleaner route, clip or mounting solution for it.",
    "time": "30–90 MIN",
    "difficulty": "EASY",
    "category": "MAKER"
  },
  {
    "id": 75,
    "title": "MAKE A PHYSICAL PHONE CAMERA RIG",
    "description": "Prototype a simple grip, stand or stabilizing attachment using whatever materials are available.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "MAKER"
  },
  {
    "id": 76,
    "title": "BUILD A MINI LIGHTBOX",
    "description": "Create a tiny product-photography lightbox from paper/cardboard and test it on one object.",
    "time": "1–2 HOURS",
    "difficulty": "EASY",
    "category": "MAKER"
  },
  {
    "id": 77,
    "title": "MAKE A CUSTOM LABEL SYSTEM",
    "description": "Create a consistent set of physical labels for drawers, filament, cables or storage that actually looks good.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "MAKER"
  },
  {
    "id": 78,
    "title": "BUILD SOMETHING WITHOUT GLUE",
    "description": "Make a small structure held together only by folds, friction, slots, screws or fasteners.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "MAKER"
  },
  {
    "id": 79,
    "title": "PROTOTYPE BEFORE YOU MODEL",
    "description": "Invent a small product, make a rough physical prototype in 30 minutes, then CAD only what you learned from it.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "MAKER"
  },
  {
    "id": 80,
    "title": "MAKE A TOOL FOR ONE SPECIFIC JOB",
    "description": "Build a tiny jig or guide that makes one repetitive task easier or more accurate.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "MAKER"
  },
  {
    "id": 81,
    "title": "TAKE THE WRONG TURN",
    "description": "Go for a walk and deliberately choose streets or paths you normally ignore. Document the best thing you find.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 82,
    "title": "FIND FIVE PERFECT COLORS",
    "description": "Go outside and photograph five naturally occurring color combinations you'd use in a design.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 83,
    "title": "MAP YOUR NEIGHBORHOOD BY SOUND",
    "description": "Walk for 30 minutes and note or record the most distinctive sound at five different locations.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 84,
    "title": "FIND THE BEST BENCH",
    "description": "Explore nearby streets or parks and scientifically rank three benches by view, comfort and vibe.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 85,
    "title": "DO A TEXTURE HUNT",
    "description": "Find and photograph ten completely different textures without photographing the whole object.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 86,
    "title": "FOLLOW THE LIGHT",
    "description": "Walk without a destination and choose each next direction based only on which street has the most interesting light.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 87,
    "title": "MAKE A MICRO TRAVEL GUIDE",
    "description": "Pretend your neighborhood is a tourist destination and document five places worth seeing.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "OUTSIDE"
  },
  {
    "id": 88,
    "title": "FIND SOMETHING YOU'VE NEVER NOTICED",
    "description": "Walk a familiar route slowly and don't return until you've photographed something you've genuinely never noticed before.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 89,
    "title": "TAKE A NO-PHONE-USE WALK",
    "description": "Bring your phone only for emergencies or one final photo. Spend 30 minutes without checking anything.",
    "time": "30 MIN",
    "difficulty": "EASY",
    "category": "OUTSIDE"
  },
  {
    "id": 90,
    "title": "CHASE A VIEWPOINT",
    "description": "Find the highest or most open accessible viewpoint nearby and make one photo worth the walk.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "OUTSIDE"
  },
  {
    "id": 91,
    "title": "MAKE A BEAT FROM HOUSE SOUNDS",
    "description": "Record five sounds around the house and turn only those recordings into a short beat or rhythm.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 92,
    "title": "DESIGN A SCI-FI BUTTON SOUND",
    "description": "Create the perfect sound for pressing a fictional spaceship button using layers of ordinary recordings.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 93,
    "title": "MAKE A 30-SECOND SOUNDTRACK",
    "description": "Compose or assemble music for an imaginary 30-second film scene, then name the scene afterward.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 94,
    "title": "RECORD A SOUND LIBRARY",
    "description": "Capture ten clean everyday sounds and organize them into your own reusable mini sound-effects library.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "AUDIO"
  },
  {
    "id": 95,
    "title": "MAKE A SOUND LOGO",
    "description": "Design a 2–4 second audio identity for The Bored Project or another fictional brand.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 96,
    "title": "TURN ONE SOUND INTO FIVE",
    "description": "Record one sound and process it into five completely different effects using pitch, EQ, reversal and time stretching.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 97,
    "title": "MAKE AN AMBIENT LOOP",
    "description": "Create a seamless one-minute ambient soundscape for studying, flying, rain, space or somewhere imaginary.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 98,
    "title": "FOLEY A SILENT VIDEO",
    "description": "Take a short muted video and recreate every sound in it yourself.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "AUDIO"
  },
  {
    "id": 99,
    "title": "MAKE THE MOST SATISFYING CLICK",
    "description": "Record or synthesize layers until you create a button/click sound that feels absurdly good.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "AUDIO"
  },
  {
    "id": 100,
    "title": "BUILD A FAKE GAME SOUND PACK",
    "description": "Create five sounds for an imaginary game: UI click, success, failure, pickup and alert.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "AUDIO"
  },
  {
    "id": 101,
    "title": "PLAY LIKE A DOCUMENTARY CREW",
    "description": "Enter a game with photo/replay mode and spend the session creating a documentary-style photo series instead of progressing.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "GAMING"
  },
  {
    "id": 102,
    "title": "MAKE A SELF-IMPOSED CHALLENGE",
    "description": "Pick a game you know well and invent one rule that completely changes how you have to play for an hour.",
    "time": "1 HOUR",
    "difficulty": "EASY",
    "category": "GAMING"
  },
  {
    "id": 103,
    "title": "RECREATE A GAME LOCATION IN 3D",
    "description": "Choose one small recognizable area from a game and block it out in Blender or Fusion from screenshots.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "GAMING"
  },
  {
    "id": 104,
    "title": "DESIGN A GAME HUD",
    "description": "Invent a HUD for a fictional game and mock up the health, map, inventory and alerts.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "GAMING"
  },
  {
    "id": 105,
    "title": "MAKE A FAKE GAME COVER",
    "description": "Create box art and a title for a game that doesn't exist.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "GAMING"
  },
  {
    "id": 106,
    "title": "BUILD A PERFECT SCREENSHOT",
    "description": "Spend 30 minutes staging one in-game screenshot with deliberate lighting, pose and composition.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "GAMING"
  },
  {
    "id": 107,
    "title": "INVENT A NEW GAME MODE",
    "description": "Take a game you play and write/design a mode that could realistically work with its existing mechanics.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "GAMING"
  },
  {
    "id": 108,
    "title": "MAKE A TRAILER FROM GAMEPLAY",
    "description": "Record your own gameplay and edit a 30-second trailer that makes the game look completely different.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "GAMING"
  },
  {
    "id": 109,
    "title": "DESIGN A CONTROLLER ACCESSORY",
    "description": "Sketch or CAD one accessory that would genuinely improve how you use a controller, wheel, yoke or keyboard.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "GAMING"
  },
  {
    "id": 110,
    "title": "PLAY A GAME WITHOUT THE MAIN GOAL",
    "description": "Spend one session ignoring the intended objective and invent your own goal inside the game's world.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "GAMING"
  },
  {
    "id": 111,
    "title": "LEARN ONE MAGIC TRICK",
    "description": "Choose one beginner trick, practice it until you can perform it smoothly, then record one clean attempt.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "LEARNING"
  },
  {
    "id": 112,
    "title": "LEARN TEN WORDS IN A RANDOM LANGUAGE",
    "description": "Pick a language you don't study and learn ten useful or funny words well enough to recall them tomorrow.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "LEARNING"
  },
  {
    "id": 113,
    "title": "LEARN TO TIE THREE KNOTS",
    "description": "Learn three genuinely useful knots and practice each until you can do it without looking at instructions.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "LEARNING"
  },
  {
    "id": 114,
    "title": "LEARN ONE NEW FUSION TOOL",
    "description": "Choose a Fusion 360 feature you've never properly used and build a tiny object whose whole purpose is forcing you to use it.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "LEARNING"
  },
  {
    "id": 115,
    "title": "LEARN BASIC MORSE",
    "description": "Memorize enough Morse code to write and decode one short secret message.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "LEARNING"
  },
  {
    "id": 116,
    "title": "LEARN A CARD FLOURISH",
    "description": "Practice one card flourish until it looks smooth enough to show someone without immediately dropping everything.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "LEARNING"
  },
  {
    "id": 117,
    "title": "UNDERSTAND HOW NFC ACTUALLY WORKS",
    "description": "Learn the basic physics and data flow behind NFC, then explain it in five sentences without technical fluff.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "LEARNING"
  },
  {
    "id": 118,
    "title": "LEARN ONE PHOTO LIGHTING PATTERN",
    "description": "Study one portrait/product lighting setup and recreate it with whatever lights you already have.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "LEARNING"
  },
  {
    "id": 119,
    "title": "LEARN A NEW KEYBOARD SHORTCUT WORKFLOW",
    "description": "Find five shortcuts in an app you use constantly and force yourself to use them for the next hour.",
    "time": "1 HOUR",
    "difficulty": "EASY",
    "category": "LEARNING"
  },
  {
    "id": 120,
    "title": "LEARN SOMETHING YOU CAN DEMONSTRATE",
    "description": "Pick any small skill that produces a visible result within 60 minutes, learn it, then prove it with one recording or object.",
    "time": "1 HOUR",
    "difficulty": "MEDIUM",
    "category": "LEARNING"
  },
  {
    "id": 121,
    "title": "BUILD THE TALLEST THING YOU CAN",
    "description": "Using only objects already in your room, build the tallest freestanding structure possible without damaging anything.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 122,
    "title": "INVENT A USELESS SPORT",
    "description": "Create rules, scoring and equipment for a sport that can be played in one room, then test one round.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 123,
    "title": "MAKE A MUSEUM FOR ONE OBJECT",
    "description": "Choose one ordinary possession and create a tiny museum-style display with lighting, label and presentation.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 124,
    "title": "CREATE A SECRET CODE",
    "description": "Invent a simple substitution or symbol system and write a message someone else could decode with a key.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 125,
    "title": "MAKE THE WORST PRODUCT PITCH",
    "description": "Choose an awful imaginary product and make a polished advertisement trying desperately to sell it.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 126,
    "title": "DO A COIN-FLIP ADVENTURE",
    "description": "Go for a safe walk and use a coin at selected intersections to decide left or right for 30 minutes.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 127,
    "title": "MAKE A TIME CAPSULE FOR 2030",
    "description": "Choose a handful of digital or physical things that represent right now and package them with a note to future you.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 128,
    "title": "INVENT A HOLIDAY",
    "description": "Create a completely new holiday with a date, traditions, food, logo and one absurd rule.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 129,
    "title": "MAKE A TINY AWARD CEREMONY",
    "description": "Invent three ridiculous awards for things in your room and create physical or digital trophies for the winners.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "RANDOM"
  },
  {
    "id": 130,
    "title": "TURN A RANDOM WORD INTO A PROJECT",
    "description": "Open a dictionary/random-word source, take the first word you get and create something inspired by it without rerolling.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "RANDOM"
  },
  {
    "id": 131,
    "title": "DRAW YOUR DESK WITHOUT LOOKING DOWN",
    "description": "Give yourself ten minutes and draw your desk setup from memory. Accuracy is optional; confidence is mandatory.",
    "time": "10 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 132,
    "title": "TAKE ONE PERFECT PHOTO",
    "description": "Choose one object and don't stop until you have one photo you're genuinely happy with.",
    "time": "15–30 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 133,
    "title": "DESIGN A 5-MINUTE LOGO",
    "description": "Set a five-minute timer, invent a fake company and finish its logo before the timer ends.",
    "time": "5–10 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 134,
    "title": "CLEAN ONE CABLE",
    "description": "Choose the single ugliest cable in your setup and route it properly.",
    "time": "10–20 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 135,
    "title": "MAKE A PAPER PROTOTYPE",
    "description": "Grab paper and tape and prototype an object you've thought about making.",
    "time": "15–30 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 136,
    "title": "REORGANIZE ONE DRAWER",
    "description": "One drawer. Nothing else. Make it absurdly organized.",
    "time": "15–30 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 137,
    "title": "EDIT ONE OLD PHOTO DIFFERENTLY",
    "description": "Pick an old RAW/photo and deliberately edit it in a style you normally wouldn't use.",
    "time": "15–30 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 138,
    "title": "MODEL ONE WEIRD SHAPE",
    "description": "Open Fusion and spend 20 minutes making a shape you've never modeled before. It doesn't need a purpose.",
    "time": "20 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 139,
    "title": "WRITE DOWN TEN TERRIBLE INVENTIONS",
    "description": "Generate ten intentionally bad invention ideas as fast as possible. Circle the one that secretly has potential.",
    "time": "10–20 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 140,
    "title": "MAKE A 10-SECOND VIDEO",
    "description": "Shoot and finish a ten-second cinematic clip before you have time to overthink it.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "QUICK"
  },
  {
    "id": 141,
    "title": "BUILD A LIMINAL HALLWAY",
    "description": "Create one eerie hallway scene with simple geometry, lighting and atmosphere. Focus on mood, not detail.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "BLENDER"
  },
  {
    "id": 142,
    "title": "MODEL YOUR MOUSE",
    "description": "Block out your computer mouse from observation using simple forms and modifiers.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "BLENDER"
  },
  {
    "id": 143,
    "title": "MAKE A GLASS OBJECT RENDER",
    "description": "Model a simple glass object and create a render where the material and lighting do most of the work.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "BLENDER"
  },
  {
    "id": 144,
    "title": "CREATE A FLOATING ISLAND",
    "description": "Build a tiny stylized floating island with one structure, vegetation and dramatic lighting.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "BLENDER"
  },
  {
    "id": 145,
    "title": "MAKE A PRODUCT TURNTABLE",
    "description": "Model or import one object and create a clean looping 360-degree product animation.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "BLENDER"
  },
  {
    "id": 146,
    "title": "RECREATE YOUR DESK CORNER",
    "description": "Model only one small corner of your real desk as accurately as you can from measurements and photos.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "BLENDER"
  },
  {
    "id": 147,
    "title": "MAKE A NEON SIGN",
    "description": "Create a fictional neon sign, put it in a dark environment and make a cinematic render.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "BLENDER"
  },
  {
    "id": 148,
    "title": "BUILD A ROOM USING ONLY CUBES",
    "description": "Create a convincing room scene while limiting almost all geometry to modified cubes.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "BLENDER"
  },
  {
    "id": 149,
    "title": "MAKE AN IMPOSSIBLE OBJECT",
    "description": "Model something that looks physically impossible from one carefully chosen camera angle.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "BLENDER"
  },
  {
    "id": 150,
    "title": "TURN A PHOTO INTO A 3D SCENE",
    "description": "Choose one of your photos and recreate its camera angle, major shapes and lighting in 3D.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "BLENDER"
  },
  {
    "id": 151,
    "title": "WRITE A FAKE PRODUCT REVIEW FROM 2050",
    "description": "Review an everyday object as if you're living in 2050 and it's hilariously outdated technology.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "WRITING"
  },
  {
    "id": 152,
    "title": "WRITE A ONE-PAGE MYSTERY",
    "description": "Write a mystery where the entire setup and reveal fit on one page.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "WRITING"
  },
  {
    "id": 153,
    "title": "INVENT A CITY",
    "description": "Create a fictional city's name, geography, weird local rule, landmark and one thing tourists always misunderstand.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "WRITING"
  },
  {
    "id": 154,
    "title": "WRITE A STORY USING FIVE RANDOM OBJECTS",
    "description": "Pick five objects in your room and force all five to matter in a short story.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "WRITING"
  },
  {
    "id": 155,
    "title": "CREATE A FAKE WIKIPEDIA PAGE",
    "description": "Invent a ridiculous historical event and write a convincing short encyclopedia entry about it.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "WRITING"
  },
  {
    "id": 156,
    "title": "WRITE INSTRUCTIONS FOR AN ALIEN",
    "description": "Explain how to use an ordinary household object as if the reader has never seen human technology.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "WRITING"
  },
  {
    "id": 157,
    "title": "MAKE A TWO-PERSON DIALOGUE",
    "description": "Write a scene where two people want opposite things but neither is allowed to say what they actually want.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "WRITING"
  },
  {
    "id": 158,
    "title": "INVENT A LEGEND FOR A REAL PLACE",
    "description": "Choose a familiar local place and create a completely fictional legend explaining one feature of it.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "WRITING"
  },
  {
    "id": 159,
    "title": "WRITE THE WORST SUPERHERO",
    "description": "Invent a superhero with an almost useless power and write one situation where it becomes unexpectedly perfect.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "WRITING"
  },
  {
    "id": 160,
    "title": "WRITE A 100-WORD SCI-FI STORY",
    "description": "Exactly 100 words. Something changes. Something matters. No extra words allowed.",
    "time": "20–30 MIN",
    "difficulty": "MEDIUM",
    "category": "WRITING"
  },
  {
    "id": 161,
    "title": "MAKE SOMEONE A CUSTOM THING",
    "description": "Design a tiny digital or physical object specifically around something a friend likes.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "SOCIAL"
  },
  {
    "id": 162,
    "title": "ASK SOMEONE FOR A RANDOM WORD",
    "description": "Message someone for one random word, then make a photo, drawing, model or design inspired by their answer.",
    "time": "30–90 MIN",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 163,
    "title": "CREATE A THREE-QUESTION INTERVIEW",
    "description": "Ask someone three genuinely interesting questions and turn their answers into a tiny profile.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 164,
    "title": "TEACH SOMEONE ONE THING",
    "description": "Choose a skill you know and teach someone the smallest useful version of it in under ten minutes.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 165,
    "title": "MAKE A RIDICULOUS QUIZ",
    "description": "Create a short quiz about your friend group, family or shared memories and send it to them.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 166,
    "title": "DO A PHOTO CHALLENGE WITH SOMEONE",
    "description": "Pick one theme, each take three photos independently, then compare what you noticed.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 167,
    "title": "MAKE A COLLABORATIVE DRAWING",
    "description": "Take turns adding to the same drawing without planning what the final thing should become.",
    "time": "20–45 MIN",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 168,
    "title": "BUILD A TINY GIFT",
    "description": "Make something small enough to finish today and give it to someone without telling them beforehand.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "SOCIAL"
  },
  {
    "id": 169,
    "title": "SWAP CREATIVE PROMPTS",
    "description": "Give someone a challenge and let them choose one for you. Both have one hour.",
    "time": "1 HOUR",
    "difficulty": "EASY",
    "category": "SOCIAL"
  },
  {
    "id": 170,
    "title": "MAKE A SHARED TIME CAPSULE",
    "description": "Collect one note, image or tiny object from a few people and package them to reopen on a future date.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "SOCIAL"
  },
  {
    "id": 171,
    "title": "TEST HOW FAR YOUR PHONE CAMERA CAN GO",
    "description": "Choose one difficult lighting situation and systematically test exposure, focal lengths and editing to find the best result.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "EXPERIMENT"
  },
  {
    "id": 172,
    "title": "MEASURE YOUR PRINTER'S REAL ACCURACY",
    "description": "Design a calibration object with known dimensions, print it and compare several measurements with calipers.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "EXPERIMENT"
  },
  {
    "id": 173,
    "title": "TEST FIVE LIGHT SOURCES",
    "description": "Photograph the same object under five different light sources and compare color, shadows and texture.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "EXPERIMENT"
  },
  {
    "id": 174,
    "title": "BUILD A PAPER BRIDGE",
    "description": "Use a limited number of sheets of paper to make a bridge, then test how much weight it can hold.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "EXPERIMENT"
  },
  {
    "id": 175,
    "title": "FIND THE BEST PHONE-STAND ANGLE",
    "description": "Prototype several viewing angles from cardboard and rank them for sitting, standing and landscape use.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "EXPERIMENT"
  },
  {
    "id": 176,
    "title": "TEST WHAT MAKES A CLICK SATISFYING",
    "description": "Compare different materials, shapes or audio layers and document what makes one click feel better than another.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "EXPERIMENT"
  },
  {
    "id": 177,
    "title": "MAKE A MINI WIND-TUNNEL TEST",
    "description": "Build a simple safe airflow experiment with paper shapes and a household fan to compare drag or stability.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "EXPERIMENT"
  },
  {
    "id": 178,
    "title": "TEST YOUR MEMORY OF A ROOM",
    "description": "Study a room for one minute, leave it, sketch everything you remember, then compare.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "EXPERIMENT"
  },
  {
    "id": 179,
    "title": "COMPARE THREE PHOTO EDITS BLIND",
    "description": "Make three very different edits of one photo, hide their settings, wait a bit and choose the strongest without checking which is which.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "EXPERIMENT"
  },
  {
    "id": 180,
    "title": "RUN A PERSONAL A/B TEST",
    "description": "Create two versions of a design, show them without explanation to a few people and see which communicates better.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "EXPERIMENT"
  },
  {
    "id": 181,
    "title": "BUILD A FILAMENT INVENTORY",
    "description": "Create a simple visual inventory of your filament colors, materials and remaining spools.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 182,
    "title": "MAKE A CAMERA-GEAR HOME",
    "description": "Give every battery, SD card, cable and camera accessory a deliberate storage location.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 183,
    "title": "CREATE A PROJECT GRAVEYARD",
    "description": "Find unfinished creative projects, list them, and choose exactly one to revive or officially kill.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 184,
    "title": "ORGANIZE YOUR PHOTO FAVORITES",
    "description": "Choose one recent photo folder and reduce it ruthlessly to your best ten images.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "ORGANIZATION"
  },
  {
    "id": 185,
    "title": "MAKE A DESK RESET SYSTEM",
    "description": "Design a five-minute routine that returns your desk to perfect condition and create places for the things that never have one.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 186,
    "title": "CREATE A 3D MODEL LIBRARY",
    "description": "Organize your own CAD/STL files into a clean naming and folder system with screenshots or previews.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 187,
    "title": "SORT YOUR CABLE BOX",
    "description": "Identify mystery cables, remove genuine junk and label the ones worth keeping.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 188,
    "title": "BUILD A CREATIVE INBOX",
    "description": "Make one place where every future project idea goes so good ideas stop disappearing into random notes.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 189,
    "title": "CURATE YOUR BEST WORK",
    "description": "Pick your ten strongest creations from any medium and put them into one clean folder or mini portfolio.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "ORGANIZATION"
  },
  {
    "id": 190,
    "title": "MAKE TOMORROW'S PROJECT READY",
    "description": "Choose one thing you want to make tomorrow and prepare every file, tool and material so starting takes under one minute.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "ORGANIZATION"
  },
  {
    "id": 191,
    "title": "DRAW WITH YOUR NON-DOMINANT HAND",
    "description": "Make a complete drawing using only your non-dominant hand and lean into the weirdness.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "ART"
  },
  {
    "id": 192,
    "title": "MAKE ART FROM A SCREENSHOT",
    "description": "Take an ugly everyday screenshot and transform it into a poster or abstract composition.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ART"
  },
  {
    "id": 193,
    "title": "DRAW ONE OBJECT TEN WAYS",
    "description": "Choose one object and represent it in ten radically different styles or levels of abstraction.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "ART"
  },
  {
    "id": 194,
    "title": "MAKE A COLLAGE FROM YOUR OWN PHOTOS",
    "description": "Use only photos you've taken to create a surreal digital collage.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "ART"
  },
  {
    "id": 195,
    "title": "DESIGN A STICKER SHEET",
    "description": "Create six small stickers around one theme, even if you never print them.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "ART"
  },
  {
    "id": 196,
    "title": "MAKE A MONOCHROME ARTWORK",
    "description": "Create an image using only shades of one color plus black/white.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ART"
  },
  {
    "id": 197,
    "title": "DRAW A MAP OF AN IMAGINARY PLACE",
    "description": "Create a map with landmarks, paths, names and one location nobody is supposed to visit.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "ART"
  },
  {
    "id": 198,
    "title": "MAKE TYPOGRAPHY THE IMAGE",
    "description": "Create artwork where the letters themselves form the visual subject rather than simply labeling it.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "ART"
  },
  {
    "id": 199,
    "title": "CREATE A FAKE VINTAGE POSTCARD",
    "description": "Design a postcard for a real or imaginary place as if it were printed decades ago.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "ART"
  },
  {
    "id": 200,
    "title": "MAKE SOMETHING DELIBERATELY UGLY",
    "description": "Break your normal design instincts on purpose, then find one element of the result worth stealing for future work.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "ART"
  },
  {
    "id": 201,
    "title": "MAKE AN AIRLINE COMMERCIAL",
    "description": "Fly a short route, record cinematic replay shots and edit a 30-second airline advertisement.",
    "time": "1–3 HOURS",
    "difficulty": "MEDIUM",
    "category": "FLIGHT SIM"
  },
  {
    "id": 202,
    "title": "PLAN A REALISTIC ONE-HOUR FLIGHT",
    "description": "Choose an airport pair, weather, aircraft and route, then fly it as realistically as you can without turning it into homework.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FLIGHT SIM"
  },
  {
    "id": 203,
    "title": "CREATE AN AIRPORT PHOTO SERIES",
    "description": "Use drone/showcase/replay cameras to make six images that look like real aviation photography.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "FLIGHT SIM"
  },
  {
    "id": 204,
    "title": "FLY INTO AN AIRPORT YOU'VE NEVER USED",
    "description": "Pick an unfamiliar airport with interesting terrain or approach procedures and learn just enough to get in cleanly.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FLIGHT SIM"
  },
  {
    "id": 205,
    "title": "MAKE A COCKPIT CINEMATIC",
    "description": "Create a short video focused entirely on cockpit details, lighting, switches and atmosphere.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "FLIGHT SIM"
  },
  {
    "id": 206,
    "title": "DESIGN A FICTIONAL AIRLINE",
    "description": "Create its name, livery concept, route map and one advertisement.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "FLIGHT SIM"
  },
  {
    "id": 207,
    "title": "TRY A WEATHER CHALLENGE",
    "description": "Choose demanding but safe simulated weather and practice one approach until you noticeably improve it.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "FLIGHT SIM"
  },
  {
    "id": 208,
    "title": "RECREATE A REAL FLIGHT",
    "description": "Find a flight you've taken or know well and recreate the aircraft, route and approximate conditions in the simulator.",
    "time": "2–4 HOURS",
    "difficulty": "MEDIUM",
    "category": "FLIGHT SIM"
  },
  {
    "id": 209,
    "title": "MAKE A FLIGHT-SIM DESK ACCESSORY",
    "description": "Design a physical label, mount, checklist holder or control accessory for your sim setup.",
    "time": "1–3 HOURS",
    "difficulty": "MEDIUM",
    "category": "FLIGHT SIM"
  },
  {
    "id": 210,
    "title": "FLY BY THE VIEW",
    "description": "Choose a scenic region and make the goal finding the best view rather than reaching a specific destination quickly.",
    "time": "45–90 MIN",
    "difficulty": "EASY",
    "category": "FLIGHT SIM"
  },
  {
    "id": 211,
    "title": "MAKE THREE MOODS FROM ONE RAW",
    "description": "Edit the same RAW photo three ways: warm cinematic, cold dramatic and clean realistic.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 212,
    "title": "EDIT WITHOUT SATURATION",
    "description": "Create a strong color image while refusing to touch the global saturation slider.",
    "time": "20–45 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 213,
    "title": "RESCUE A PHOTO YOU REJECTED",
    "description": "Find an old image you dismissed and see whether crop, masking and a fresh grade can make it work.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 214,
    "title": "MAKE A FILM LOOK FROM SCRATCH",
    "description": "Build your own film-inspired grade without using a preset, then save the settings if you like it.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 215,
    "title": "DO A BLACK-AND-WHITE DEEP DIVE",
    "description": "Take one image and make a deliberate monochrome edit using tonal separation rather than simply removing saturation.",
    "time": "30–60 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 216,
    "title": "MATCH TWO DIFFERENT PHOTOS",
    "description": "Choose images shot in different conditions and grade them until they feel like part of the same series.",
    "time": "30–60 MIN",
    "difficulty": "HARD",
    "category": "PHOTO EDITING"
  },
  {
    "id": 217,
    "title": "MAKE A BEFORE-AFTER PRESENTATION",
    "description": "Take one strong edit and design a clean before/after presentation explaining only the three changes that mattered most.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO EDITING"
  },
  {
    "id": 218,
    "title": "EDIT FOR PRINT",
    "description": "Choose one photo and prepare it specifically to look good as a physical print rather than on a bright screen.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 219,
    "title": "TRY AN EXTREME CROP",
    "description": "Take a high-resolution image and find a completely different composition hidden inside it.",
    "time": "20–30 MIN",
    "difficulty": "EASY",
    "category": "PHOTO EDITING"
  },
  {
    "id": 220,
    "title": "BUILD YOUR OWN PRESET",
    "description": "Analyze several edits you love, identify what they share and build a reusable starting preset around those choices.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO EDITING"
  },
  {
    "id": 221,
    "title": "INVENT A BETTER UMBRELLA DETAIL",
    "description": "Don't redesign the whole umbrella. Solve one annoying part of using, carrying, drying or storing it.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "INVENTION"
  },
  {
    "id": 222,
    "title": "INVENT A DESK OBJECT FOR NIGHT",
    "description": "Create something useful specifically when the room is dark: finding cables, charging, controls or organization.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "INVENTION"
  },
  {
    "id": 223,
    "title": "INVENT A PRODUCT FOR ONE HAND",
    "description": "Choose an everyday task and redesign the object so it can be comfortably completed with one hand.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "INVENTION"
  },
  {
    "id": 224,
    "title": "INVENT A TRAVEL OBJECT",
    "description": "Design something tiny that solves one annoyance caused by cables, bags, phones, cameras or waiting while traveling.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "INVENTION"
  },
  {
    "id": 225,
    "title": "INVENT SOMETHING FOR YOUR FUTURE SELF",
    "description": "Identify one thing future-you repeatedly forgets, loses or delays and design a physical reminder or system for it.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "INVENTION"
  },
  {
    "id": 226,
    "title": "INVENT A PRODUCT WITH NO SCREEN",
    "description": "Solve a modern problem without adding an app, display or internet connection.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "INVENTION"
  },
  {
    "id": 227,
    "title": "INVENT A BETTER SD CARD HOLDER",
    "description": "Design an SD-card storage concept that makes full/empty cards instantly distinguishable.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "INVENTION"
  },
  {
    "id": 228,
    "title": "INVENT A MODULAR DESK SYSTEM",
    "description": "Design one base connection that could support several interchangeable desk accessories.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "INVENTION"
  },
  {
    "id": 229,
    "title": "INVENT SOMETHING THAT FOLDS FLAT",
    "description": "Create an object that becomes useful in 3D but stores nearly flat when not needed.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "INVENTION"
  },
  {
    "id": 230,
    "title": "INVENT THE NEXT BORED PROJECT PRODUCT",
    "description": "Imagine The Bored Project became a brand. Design the second physical product it would release.",
    "time": "1–3 HOURS",
    "difficulty": "HARD",
    "category": "INVENTION"
  },
  {
    "id": 231,
    "title": "ONLY SHOOT FROM KNEE HEIGHT",
    "description": "Take a short photo walk where every frame must be shot from roughly knee height.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 232,
    "title": "ONLY SHOOT UP",
    "description": "Create a photo series where the camera is always pointed above the horizon.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 233,
    "title": "FIND FIVE FRAMES WITHIN FRAMES",
    "description": "Use doors, windows, railings, branches or architecture to frame your subject five different ways.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 234,
    "title": "MAKE SHADOWS THE SUBJECT",
    "description": "Take ten photographs where the shadow matters more than the object casting it.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 235,
    "title": "SHOOT A MINI SERIES AT HOME",
    "description": "Pick one visual theme and create five images without leaving your home.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 236,
    "title": "USE ONLY MANUAL EXPOSURE",
    "description": "Spend one session in manual exposure and deliberately predict each adjustment before checking the result.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 237,
    "title": "FIND PERFECT SYMMETRY",
    "description": "Hunt for five scenes that become satisfying only when framed precisely symmetrically.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 238,
    "title": "PHOTOGRAPH MOTION THREE WAYS",
    "description": "Capture motion frozen, slightly blurred and intentionally long-exposed in three separate images.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 239,
    "title": "MAKE A PHOTO LOOK LIKE A MOVIE STILL",
    "description": "Stage and grade one photograph so it feels like a frame pulled from a larger film.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 240,
    "title": "CREATE A 6-IMAGE COLOR STORY",
    "description": "Shoot six images whose colors flow intentionally from one image to the next.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "PHOTO MISSIONS"
  },
  {
    "id": 241,
    "title": "LET A DICE DESIGN YOUR PROJECT",
    "description": "Roll a die for medium, difficulty and time limit, then make whatever combination you get without rerolling.",
    "time": "45–90 MIN",
    "difficulty": "MEDIUM",
    "category": "WILD CARD"
  },
  {
    "id": 242,
    "title": "MAKE SOMETHING THAT GLOWS",
    "description": "Create a photo, render, physical object or screen design where light itself is the main feature.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "WILD CARD"
  },
  {
    "id": 243,
    "title": "REVERSE-ENGINEER A SIMPLE OBJECT",
    "description": "Choose a small object, measure it, figure out how it was probably designed and recreate your own version.",
    "time": "1–2 HOURS",
    "difficulty": "HARD",
    "category": "WILD CARD"
  },
  {
    "id": 244,
    "title": "MAKE A PROJECT USING ONLY WHAT IS WITHIN ARM'S REACH",
    "description": "Sit down, look around, and create something using only objects and tools you can reach without standing up.",
    "time": "30–60 MIN",
    "difficulty": "EASY",
    "category": "WILD CARD"
  },
  {
    "id": 245,
    "title": "CREATE SOMETHING FOR EXACTLY ONE PERSON",
    "description": "Pick one person and make something so specifically suited to them that it would make no sense for anyone else.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "WILD CARD"
  },
  {
    "id": 246,
    "title": "TURN A MISTAKE INTO THE DESIGN",
    "description": "Start making something quickly; when the first mistake happens, you're not allowed to undo it. Make it part of the final result.",
    "time": "45–90 MIN",
    "difficulty": "HARD",
    "category": "WILD CARD"
  },
  {
    "id": 247,
    "title": "MAKE THE SMALLEST VERSION",
    "description": "Choose something normally large and create a functional, visual or 3D miniature version of it.",
    "time": "1–2 HOURS",
    "difficulty": "MEDIUM",
    "category": "WILD CARD"
  },
  {
    "id": 248,
    "title": "MAKE THE BORED PROJECT AD",
    "description": "Create a 20–30 second launch commercial for The Bored Project as if it were a real product going on sale tomorrow.",
    "time": "1–3 HOURS",
    "difficulty": "MEDIUM",
    "category": "WILD CARD"
  },
  {
    "id": 249,
    "title": "DESIGN SOMETHING YOU CAN FINISH TODAY",
    "description": "No giant dream project. Pick one idea whose final version can genuinely exist before you go to sleep and finish it.",
    "time": "1–4 HOURS",
    "difficulty": "MEDIUM",
    "category": "WILD CARD"
  },
  {
    "id": 250,
    "title": "THE CHAOS MISSION",
    "description": "Pick three categories from The Bored Project at random and create one project that somehow combines all three.",
    "time": "2–4 HOURS",
    "difficulty": "HARD",
    "category": "WILD CARD"
  }
];
