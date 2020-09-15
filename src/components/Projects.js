import React, { Component } from 'react';
import { Container, Row, Card,} from 'react-bootstrap';
import quizApp from '../assets/quizapp.jpg';
import patatap from '../assets/patatap.jpg';
import colorGame from '../assets/colormemorygame.jpg';
import mountainsWeb from '../assets/mountainswebsite.jpg';

// Defining the projects in cards
class Projects extends Component {
    static defaultProps = {
        data: [
            {
                title: "Quiz App",
                pic: quizApp,
                descr: "An app made using React where you can take a quiz and provides your results.",
                githb: "https://github.com/MRosyid/QuizApp",
                live: "https://ancient-ravine-49664.herokuapp.com/",
            },
            {
                title: "Patatap Clone",
                pic: patatap,
                descr: "A clone made by utilising the source animation and sound libraries.",
                githb: "https://github.com/MRosyid/PatatapClone",
                live: "https://mrosyid.github.io/PatatapClone/",
            },
            {
                title: "Colour Memory Game",
                pic: colorGame,
                descr: "A colour game generating random colours that was build using Javascript DOM manipulation",
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
                                    <img className="card-picture" src={d.pic} alt={d.title} />
                                    <h4>{d.title}</h4>
                                    <p>{d.descr}</p>
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