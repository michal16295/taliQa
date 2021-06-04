import React from "react";
import styled from "styled-components";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Result = ({ formData }) => {
  const wbc = () => {
    if (formData.age > 18) {
      if (formData.white_blood_cells > 11000)
        return "ערכים גבוהים: מצביעים לרוב על קיומו של זיהום, אם קיימת מחלת חום. במקרים אחרים, נדירים ביותר, עלולי ערכים גבוהים מאוד להעיד על מחלת דם או סרטן.";
      if (formData.white_blood_cells < 4500)
        return "ערכים נמוכים: מצביעים על מחלה ויראלית, כשל של מערכת החיסון ובמקרים נדירים ביותר על סרטן.";
      return "נורמלי";
    }
    if (formData.age >= 4 && formData.age <= 17) {
      if (formData.white_blood_cells > 15500)
        return "ערכים גבוהים: מצביעים לרוב על קיומו של זיהום, אם קיימת מחלת חום. במקרים אחרים, נדירים ביותר, עלולי ערכים גבוהים מאוד להעיד על מחלת דם או סרטן.";
      if (formData.white_blood_cells < 5500)
        return "ערכים נמוכים: מצביעים על מחלה ויראלית, כשל של מערכת החיסון ובמקרים נדירים ביותר על סרטן.";
      return "נורמלי";
    }
    if (formData.age >= 0 && formData.age <= 3) {
      if (formData.white_blood_cells > 6000)
        return "ערכים גבוהים: מצביעים לרוב על קיומו של זיהום, אם קיימת מחלת חום. במקרים אחרים, נדירים ביותר, עלולי ערכים גבוהים מאוד להעיד על מחלת דם או סרטן.";
      if (formData.white_blood_cells < 17500)
        return "ערכים נמוכים: מצביעים על מחלה ויראלית, כשל של מערכת החיסון ובמקרים נדירים ביותר על סרטן.";
      return "נורמלי";
    }
  };
  const neutrophil = () => {
    if (formData.neutrophil > 52) return "מעידים לרוב על זיהום חיידקי";
    if (formData.neutrophil < 28)
      return "ערכים נמוכים מעידים על הפרעה ביצירת הדם, על נטייה לזיהומים מחיידקים ובמקרים נדירים על תהליך סרטני";
    return "נורמלי";
  };
  const lymphocytes = () => {
    if (formData.lymphocytes > 52)
      return "ערכים גבוהים עשויים להצביע על זיהום חיידקי ממושך או על סרטן ";
    if (formData.lymphocytes < 36)
      return "ערכים נמוכים מעידים על בעיה ביצירת תאי דם";
    return "נורמלי";
  };
  const rbc = () => {
    if (formData.red_blood_cells > 6)
      return "ערכים גבוהים עלולים להצביע על הפרעה במערכת ייצור הדם.";
    if (formData.red_blood_cells < 4.5)
      return "ערכים נמוכים עלולים להצביע על אנמיה או על דימומים קשים";
    return "נורמלי";
  };
  const hct = () => {
    if (formData.gender === "m") {
      if (formData.hct > 54) return "ערכים גבוהים שכיחים בדרך כלל אצל מעשנים";
      if (formData.hct < 37)
        return "ערכים נמוכים מצביעים לרוב על דימום או על אנמיה";
      return "נורמלי";
    }
    if (formData.gender === "f") {
      if (formData.hct > 47) return "ערכים גבוהים שכיחים בדרך כלל אצל מעשנים";
      if (formData.hct < 33)
        return "ערכים נמוכים מצביעים לרוב על דימום או על אנמיה";
      return "נורמלי";
    }
  };
  const uren = () => {
    if (formData.uren > 43)
      return "ערכים גבוהים עלולים להצביע על מחלות כליה, התייבשות או דיאטה עתירת חלבונים";
    if (formData.uren < 17)
      return "ערכים נמוכים תת תזונה, דיאטה דלת חלבון או מחלת כבד. יש לציין שבהריון רמת השתנן יורדת";
    return "נורמלי";
  };
  const hemoglobin = () => {
    if (formData.uren > 16) return "גבוה";
    if (formData.uren < 12)
      return "ערכים נמוכים מעידים על אנמיה. זו יכולה לנבוע מהפרעה מטולוגית, מחסור בברזל ודימומים";
    return "נורמלי";
  };
  const creathinine = () => {
    if (formData.creathinine > 1)
      return "ערכים גבוהים עלולוים להצביע על בעיה כלייתית ובמקרים חמורים על אי ספיקת כליות";
    if (formData.creathinine < 0.6)
      return "ערכים נמוכים נראים לרוב בחולים בעלי מסת שריר ירודה מאוד ואנשים בתת תזונה שאינם צורכים די חלבון";
    return "נורמלי";
  };
  const iron = () => {
    if (formData.iron > 160) return "רמות גבוהות עלולות להצביע על הרעלת ברזל";
    if (formData.iron < 60)
      return "רמות נמוכות מעידות על תזונה לא מספקת או על עלייה בצורת בברזל";
    return "נורמלי";
  };
  const hdl = () => {
    if (formData.gender === "m") {
      if (formData.גבוה_density_lipoprtoein > 62)
        return "רמות גבוהות לרוב אינן מזיקות";
      if (formData.גבוה_density_lipoprtoein < 29)
        return "רמות נמוכות עלולות להצביע על סיכון למחלות לב, על היפרליפדמיה או על סכרת מבוגרים";
      return "נורמלי";
    }
    if (formData.gender === "f") {
      if (formData.high_density_lipoprtoein > 82)
        return "רמות גבוהות לרוב אינן מזיקות";
      if (formData.high_density_lipoprtoein < 34)
        return "רמות נמוכות עלולות להצביע על סיכון למחלות לב, על היפרליפדמיה או על סכרת מבוגרים";
      return "נורמלי";
    }
  };
  const ap = () => {
    if (formData.eastren) {
      if (formData.alkaline_phosphatase > 120)
        return "רמות גבוהות עלולות להצביע על מחלות כבד, מחלות בדרכי המרה, הריון פעילות יתר של בלוטת התריס או שימוש בתרופות שונות";
      if (formData.alkaline_phosphatase < 60)
        return "רמות נמוכות עלולות להצביע על תזונה לקויה שחסרים בה חלבונים";
      return "נורמלי";
    } else {
      if (formData.alkaline_phosphatase > 90)
        return "רמות גבוהות עלולות להצביע על מחלות כבד, מחלות בדרכי המרה, הריון פעילות יתר של בלוטת התריס או שימוש בתרופות שונות";
      if (formData.alkaline_phosphatase < 30)
        return "רמות נמוכות עלולות להצביע על תזונה לקויה שחסרים בה חלבונים";
      return "נורמלי";
    }
  };
  const data = (
    <div ref={ref}>
      <Title>Results</Title>
      <Inner>
        <Row>
          <Flex>
            <Label>Name:</Label>
            <div>{formData.name}</div>
          </Flex>
          <Flex>
            <Label>Gender:</Label>
            <div>{formData.gender == "f" ? "Female" : "Male"}</div>
          </Flex>
          <Flex>
            <Label>Age:</Label>
            <div>{formData.age}</div>
          </Flex>
        </Row>
        <Row>
          <Flex>
            <Label>Smokes:</Label>
            <div>{formData.smoke ? "Yes" : "No"}</div>
          </Flex>
          <Flex>
            <Label>Pregnant:</Label>
            <div>{formData.pregnancy ? "Yes" : "No"}</div>
          </Flex>
          <Flex>
            <Label>Ethiopian:</Label>
            <div>{formData.ethiopian ? "Yes" : "No"}</div>
          </Flex>
          <Flex>
            <Label>Eastren:</Label>
            <div>{formData.eastren ? "Yes" : "No"}</div>
          </Flex>
        </Row>

        <Flex>
          <Label style={{ flex: "1" }}>White Blood Cells:</Label>
          <div style={{ flex: "0.5" }}>{formData.white_blood_cells}</div>
          <P>{wbc()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Neutrophil:</Label>
          <div style={{ flex: "0.5" }}>{formData.neutrophil}</div>
          <P>{neutrophil()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Lymphocytes:</Label>
          <div style={{ flex: "0.5" }}>{formData.lymphocytes}</div>
          <P>{lymphocytes()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Red Blood Cells:</Label>
          <div style={{ flex: "0.5" }}>{formData.red_blood_cells}</div>
          <P>{rbc()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>HCT:</Label>
          <div style={{ flex: "0.5" }}>{formData.hct}</div>
          <P>{hct()}</P>
        </Flex>

        <Flex>
          <Label style={{ flex: "1" }}>Uren:</Label>
          <div style={{ flex: "0.5" }}>{formData.uren}</div>
          <P>{uren()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Hemoglobin:</Label>
          <div style={{ flex: "0.5" }}>{formData.hemoglobin}</div>
          <P>{hemoglobin()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Creathinine:</Label>
          <div style={{ flex: "0.5" }}>{formData.creathinine}</div>
          <P>{creathinine()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Iron:</Label>
          <div style={{ flex: "0.5" }}>{formData.iron}</div>
          <P>{iron()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>High Density Lipoprtoein:</Label>
          <div style={{ flex: "0.5" }}>{formData.high_density_lipoprtoein}</div>
          <P>{hdl()}</P>
        </Flex>
        <Flex>
          <Label style={{ flex: "1" }}>Alkaline Phosphatase:</Label>
          <div style={{ flex: "0.5" }}>{formData.alkaline_phosphatase}</div>
          <P>{ap()}</P>
        </Flex>
      </Inner>
    </div>
  );

  return (
    <Form>
      {data}
      <Pdf targetRef={ref} filename="result.pdf">
        {({ toPdf }) => <Button onClick={toPdf}>Download Pdf</Button>}
      </Pdf>
    </Form>
  );
};
export default Result;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;
const Form = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: left;
  min-height: 200px;
  width: 720px;
  margin: 40px auto;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  padding-bottom: 20px;
`;
const Inner = styled.div`
  padding: 20px 30px;
  font-size: 22px;
  font-weight: 500;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;
const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  column-gap: 5px;
  margin: 15px 0;
`;
const Label = styled.div`
  font-weight: 600;
`;
const P = styled.div`
  text-align: right;
  font-size: 16px;
  width: 40%;
`;
const Button = styled.div`
  border-radius: 29px;
  background: #f02a4c;
  height: 40px;
  width: 150px;
  border: none;
  color: white;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  outline: none;
  cursor: pointer;
  margin: 20px auto;
  &:hover {
    box-shadow: 0px 3px 6px rgba(255, 255, 255, 0.16);
  }
`;
