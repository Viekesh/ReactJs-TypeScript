import { ProjectsData } from "../ServiceDB/ServiceDB";
import "./Projects.scss"




const Projects = () => {
    return (
        <>
            <section className="projects">

                {
                    ProjectsData.map((data) => {
                        return (
                            <>
                                <div className="project_card">
                                    <div className="img"></div>
                                    <div className="pro_description"></div>
                                    <div className="pro_features">
                                        <ul>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <div className="pro_links"></div>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}



export default Projects;