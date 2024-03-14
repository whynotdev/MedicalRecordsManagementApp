import React from "react";

function BloodTest() {
  return (
    <>
      <div>
        <h1 className="page-title">HealthTracking</h1>
        <hr/>
        {/* Overview */}
        <div>
          <h1 className="page-title">Overviews</h1>
          <p>
            A blood pressure test measures the pressure in the arteries as the
            heart pumps. It may be done as part of a routine health checkup or
            as a screening for high blood pressure (hypertension). Some people
            use home monitors to check their blood pressure at home.
          </p>
        </div>
        <hr />
        {/* Why it's done */}
        <div>
          <h1 className="page-title">Why it's done</h1>
          <p>
            A blood pressure test is a routine part of most health care
            checkups. Blood pressure screening is an important part of general
            health care.
          </p>
          <p>
            How often you should get your blood pressure checked depends on your
            age and overall health:
          </p>
          <ul>
            <li>
              People age 18 and older with optimal blood pressure and no heart
              disease risk factors should have a blood pressure test at least
              once every 2 to 5 years.
            </li>
            <li>
              People age 40 and older — or younger with an increased risk of
              high blood pressure — should have a blood pressure test every
              year. Risk factors for high blood pressure include obesity and
              being Black.
            </li>
            <li>
              People who have chronic health conditions, such as high or low
              blood pressure or heart disease, may need to have blood pressure
              tests more often.
            </li>
          </ul>
        </div>
        <hr/>

        {/* How you prepare */}
        <div>
          <h1 className="page-title">How you prepare</h1>
          <p>
            No special preparations are usually needed for a blood pressure
            test. But the following steps may provide the most accurate
            measurement:
          </p>
          <ul>
            <li>
              Do not smoke, exercise, or use caffeine for 30 minutes to an hour
              before the test. Such activities increase blood pressure and heart
              rate.
            </li>
            <li>
              Wear a short-sleeved shirt so that the blood pressure cuff can be
              placed more easily around your arm.
            </li>
            <li>Relax in a chair for at least five minutes before the test.</li>
            <li>
              Tell your health care provider about the medications you take.
              Some drugs may affect blood pressure.
            </li>
          </ul>
        </div>
        <hr/>

        {/* After the Procedure */}
        <div>
          <h1 className="page-title">After the procedure</h1>
          <p>
            If your blood pressure is high or low, you'll likely need to have at
            least three more blood pressure tests, spaced at least a week apart,
            to determine if you need treatment. Blood pressure can vary from
            moment to moment and day to day.
          </p>
        </div>
        <hr/>

        {/* Results */}
        <div>
          <h1 className="page-title">Results</h1>
          <p>
            Your health care provider can tell you your blood pressure results
            right away after the test.
          </p>
          <p>
            Blood pressure is measured in millimeters of mercury (mm Hg). A
            blood pressure measurement has two numbers:
          </p>
          <ul>
            <li>
              The top number (systolic) is the pressure of the blood flow when
              the heart muscle squeezes (contracts), pumping blood.
            </li>
            <li>
              The bottom number (diastolic) is the pressure measured between
              heartbeats.
            </li>
          </ul>
        </div>
        <hr/>

        {/* Blood Pressure Categories */}
        <div>
          <h1 className="page-title">Blood Pressure Categories</h1>
          <table>
            <thead>
              <tr>
                <th>Top number (systolic) in mm Hg</th>
                <th>Bottom number (diastolic) in mm Hg</th>
                <th>Blood pressure category</th>
                <th>What to do</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Below 120 </td>
                <td>Below 80 </td>
                <td>Normal blood pressure</td>
                <td>Maintain or adopt a healthy lifestyle.</td>
              </tr>
              <tr>
                <td>120-129</td>
                <td>Below 80</td>
                <td>Elevated blood pressure</td>
                <td>Maintain or adopt a healthy lifestyle.</td>
              </tr>
              <tr>
                <td>130-139</td>
                <td>80-89</td>
                <td>Stage 1 high blood pressure (hypertension)</td>
                <td>
                  Maintain or adopt a healthy lifestyle. Talk to your provider
                  about taking one or more medications.
                </td>
              </tr>
              <tr>
                <td>140 or higher</td>
                <td>90 or higher</td>
                <td>Stage 2 high blood pressure (hypertension)</td>
                <td>
                  Maintain or adopt a healthy lifestyle. Talk to your provider
                  about taking more than one medication.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr/>

        {/* Lifestyle Changes */}
        <div>
          <h1 className="page-title">Lifestyle Changes</h1>
          <p>
            If you have high blood pressure, making a few lifestyle changes can
            improve your heart health:
          </p>
          <ul>
            <li>
              Reduce salt (sodium). The American Heart Association recommends
              that healthy adults have no more than 2,300 milligrams (mg) of
              sodium a day. Ideally, most adults should limit salt to less than
              1,500 mg a day. Check the amount of salt in processed foods, such
              as canned soups and frozen foods.
            </li>
            <li>
              Eat healthy foods. Choose fruits, vegetables, whole grains, and
              low-fat dairy foods. Eat less saturated fat and total fat.
            </li>
            <li>
              Avoid or limit alcohol. Alcohol can raise blood pressure. If you
              choose to drink alcohol, do so in moderation. For healthy adults,
              that means up to one drink a day for women and up to two drinks a
              day for men.
            </li>
            <li>
              Don't smoke. If you need help quitting, ask your provider about
              strategies that can help. Also try to avoid secondhand smoke.
            </li>
            <li>
              Manage weight. Having too much body weight is a risk factor for
              high blood pressure. Losing even just a few pounds can lower blood
              pressure.
            </li>
            <li>
              Exercise regularly. Staying active helps lower your blood pressure
              and manage your weight. The Department of Health and Human
              Services recommends that most healthy adults get at least 150
              minutes of moderate aerobic activity or 75 minutes of vigorous
              aerobic activity a week, or a combination of the two.
            </li>
          </ul>
        </div>
        <hr/>

        {/* Medication */}
        <div>
          <h1 className="page-title">Medication</h1>
          <p>
            If lifestyle changes do not successfully manage your blood pressure,
            your health care provider may recommend medication. Together, you
            and your provider can discuss the best treatment options for you.
          </p>
        </div>
        <hr/>
      </div>
    </>
  );
}

export default BloodTest;
