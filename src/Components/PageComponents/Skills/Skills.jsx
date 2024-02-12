import Heading from "../Heading/Heading";
import "./Skills.css";



const Skills = () => {
    return (
        <>
            <Heading head="Skills :" />
            <section className="skills_container">
                <div className="pro x_y_axis_center typescript">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/800px-Typescript.svg.png" alt="" />
                </div>
                <div className="pro x_y_axis_center javascript">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
                </div>
                <div className="pro x_y_axis_center nodejs">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1024px-Node.js_logo.svg.png" alt="" />
                </div>
                <div className="pro x_y_axis_center reactjs">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/800px-React_Logo_SVG.svg.png" alt="" />
                </div>
                <div className="pro x_y_axis_center axios">
                    <img src="https://axios-http.com/assets/logo.svg" alt="" />
                </div>
                <div className="pro x_y_axis_center python">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" alt="" />
                </div>
                <div className="pro x_y_axis_center django">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/1920px-Django_logo.svg.png" alt="" />
                </div>
                <div className="pro x_y_axis_center firebase">
                    <img src="https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" alt="" />
                </div>
                <div className="pro x_y_axis_center mongodb">
                    <img src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />
                </div>
            </section>
        </>
    )
}



export default Skills;