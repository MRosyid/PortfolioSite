import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';

class Resume extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        {/* Adding name on the first third  */}
                        <Col className="Col1" md={4}>
                            <Jumbotron className="about-head">
                                <h1>Matin Rosyid</h1>
                                <p className="Stack">
                                    HTML5 | CSS3/SASS | Bootstrap | Javascript | NodeJS | React | Express | MongoDB | Python | C++
                                </p>
                                <p>
                                    email: matinrosyid@live.com
                                </p>
                                <a rel="noopener noreferrer" target="_blank" href="https://github.com/MRosyid">
                                    <i class="fab fa-github fa-2x"></i>
                                </a>
                            </Jumbotron>
                        </Col>
                        {/* Adding the resume on the second and last third */}
                        <Col md={8}>
                            <Jumbotron className="about-body">
                                <h1>About me</h1>
                                <p>
                                    I started out as a Electrical Engineering student and through it learned Python and C++. I recently discovered web development
                                    and was amazed how quick you could built a project and how responsive it was. Since then have I been building my skillset starting from HTML, CSS
                                    and Javascript and have enjoyed every step of it. I am currently diving deeper into Javascript while also enhancing my abilities in React.
                                </p>
                                <h1>Other Projects</h1>
                                <p>
                                    <span className="about-titles">Dynamic Traffic Simulator- </span>
                                In a team, designed and constructed a traffic simulator using C++ to evaluate the capacity of a road network. I built a network that
                                incorporated speed limits, traffic lights and bi-directional flow which was combined into a simulation with vehicle and
                                driving profiles and properties.
                                </p>
                                <p>
                                    <span className="about-titles">3D printed colour sorter- </span>
                                Worked together to 3D print a colour sorter. I designed and built a colour sensing programme using C++ and integrated it to a
                                motor sensor programme into a MSP430. The model was tested to perform colour sorting exercises using an interface to control the separation.
                                </p>
                                <p>
                                    <span className="about-titles">Stock Control System- </span>
                                Employed SQLite into Python to a create a stock control system. I enhanced it by
                                providing a simple user interface that easily manages the incoming inventory and monitors and updates stock all in a clear DataGrid.
                                </p>
                                <p>
                                    <span className="about-titles">Thermal Analysis using Biometrics- </span>
                                    I constructed an analogue temperature sensing system using an Arduino UNO. Experimented with the sensor responses
                                     and created a programme using C++ that converted the system’s data results into practical information.
                                </p>
                                <h1>Experiences</h1>
                                <p>
                                    <span className="about-titles">Project Manager, Ramadan for Schools- </span>
                                Lead the project to educate and facilitate discussion amongst secondary school children regarding the month Ramadan. I built the presentation using
                                Prezi and created teacher and student manuals. By working together with schools around Glasgow I presented interactive workshops to more than 500 children.
                                </p>
                                <p>
                                    <span className="about-titles">President of the Strathclyde University Muslim Student Association- </span>
                                Managed one of the largest societies in Scotland and was awarded as the top 3 societies by the Strathclyde University Union.
                                Organised multiple events during the year and contributed in an international student-based charity initiative that raised over 1.3 million pounds in one week.
                                </p>
                                <p>
                                    <span className="about-titles">President of the Student Union, Indonesian School in Cairo- </span>
                                Lead the student union and organised various events including national ceremonies in collaboration with the Indonesian Embassy.
                                </p>
                                <p>
                                    <span className="about-titles">Math and Language Tutor- </span>
                                    Delivered lectures to students using up to date methods and helped them develop a better understanding by communicating in a clear simplified language. I have experience
                                     in motivating and encouraging special needs students into developing their performance, understanding and confidence.
                                </p>
                            </Jumbotron>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Resume;