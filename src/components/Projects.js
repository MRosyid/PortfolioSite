import React, { Component } from 'react';
import { Container, Row, Card, } from 'react-bootstrap';
import quizApp from '../assets/quizapp.jpg';
import patatap from '../assets/patatap.jpg';
import colorGame from '../assets/colormemorygame.jpg';
import mountainsWeb from '../assets/mountainswebsite.jpg';
import yelpCastle from '../assets/yelpcastle.jpg';
import skyHigh from '../assets/skyhightours.jpg';

// Defining the projects in cards
class Projects extends Component {
    static defaultProps = {
        data: [
            {
                title: "Yelp Castle",
                pic: yelpCastle,
                descr: "A Yelp replica created using MongoDb, Express and NodeJS. Supports cloud CRUD operations and authentication.",
                githb: "https://github.com/MRosyid/YelpCastle",
                live: "https://mrosyid-yelp-castle.herokuapp.com/",
            },
            {
                title: "Flex Marketing Page",
                pic: skyHigh,
                descr: "Used only HTML5 and CSS3 to create a responsive marketing page focused on exploring Flexbot",
                githb: "https://github.com/MRosyid/FlexMarketingPage",
                live: "https://mrosyid.github.io/FlexMarketingPage/",
            },
            {
                title: "Quiz App",
                pic: quizApp,
                descr: "A React quiz app which incorporates a timer, responsive hint function and performance evaluation.",
                githb: "https://github.com/MRosyid/QuizApp",
                live: "https://mrosyid-quiz-app.herokuapp.com/",
            },
            {
                title: "Patatap Clone",
                pic: patatap,
                descr: "A clone made by utilising the source animation and sound libraries to create a dynamic music instrument.",
                githb: "https://github.com/MRosyid/PatatapClone",
                live: "https://mrosyid.github.io/PatatapClone/",
            },
            {
                title: "Colour Memory Game",
                pic: colorGame,
                descr: "A colour game which generates random colours to test memory. Build using Javascript DOM manipulation",
                githb: "https://github.com/MRosyid/ColorMemoryGame",
                live: "https://mrosyid.github.io/ColorMemoryGame/",
            },
            {
                title: "Mountain Website",
                pic: mountainsWeb,
                descr: "Used HTML5, CSS and Bootstrap to create a responsive mountain website that adjust to the visitors display size",
                githb: "https://github.com/MRosyid/MountainWebsite",
                live: "https://mrosyid.github.io/MountainWebsite/",
            },
        ]
    }

    render() {
        return (
            <div className="Container">
                {/* Displaying data in cards */}
                <Container fluid className="mt-5">
                    <Row className=" Row justify-content-center">
                        {
                            this.props.data.map(d => (
                                <Card className="Cards col-lg-4 col-xl-3" key={d.title}>
                                    <img className="img-responsive" width="100%" src={d.pic} alt={d.title} />
                                    <h4 class="mt-1">{d.title}</h4>
                                    <div class="mb-0">
                                        <p>{d.descr}</p>
                                    </div>
                                    <div>
                                        <a className="links" target="_blank" rel="noopener noreferrer" href={d.githb}> GITHUB </a>
                                        <a className="links" target="_blank" rel="noopener noreferrer" href={d.live}> LIVE DEMO </a>
                                    </div>
                                </Card>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Projects;