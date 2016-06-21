# Omaha Java User Group - Intro To Groovy

# Slide Deck
Start up the local server, run `npm start`

Open a browser and hit http://localhost:3000, and you are ready to roll

#### Controls

|Key Combination|Function|
|---|---|
|Right Arrow|Next Slide|
|Left Arrow|Previous Slide|
|Space|Next Slide|
|Shift+Space|Previous Slide|
|Alt/Option + O|Toggle Overview Mode|
|Alt/Option + P|Toggle Presenter Mode|

#### Fullscreen

Fullscreen can be toggled via browser options, or by **hovering over the bottom right corner of your window until the fullscreen icon appears and clicking it**.

#### PDF Export

Exporting a totally sweet looking PDF from your totally sweet looking Spectacle presentation is absurdly easy.

- Run `npm start`
- Append your URL with `?export` ([http://localhost:3000/?export](http://localhost:3000/?export))
- Bring up the print dialog `(ctrl or cmd + p)`
- Check "Background Graphics" to on if you are about that life
- Change destination to "Save as PDF"


# Examples
There are 4 different workshops.  These are just spock tests with certain aspects left to be completed (Marked by TODO's).  To run the tests use the following gradle tasks.

#### Gradle Tasks
* `gradle workshop1`
  * Runs / Reports only on workshop1
* `gradle workshop2`
  * Runs / Reports only on workshop2
* `gradle workshop3`
  * Runs / Reports only on workshop3
* `gradle workshop4`
  * Runs / Reports only on workshop4
* `gradle test`
  * Runs / Reports on all tests (workshop1 - workshop4)

#### Solutions
The solutions folder contains working copies of all the workshops and groovy classes if you become stuck.


# Credits
- [Spectacle](http://formidable.com/open-source/spectacle/) - A ReactJS Presentation Library from @formidablelabs
