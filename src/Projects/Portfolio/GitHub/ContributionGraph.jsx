// import React, { useEffect, useState } from "react";
// import axios from "axios";




// const ContributionGraph = ({ username }) => {
    

//     const [contribution, setContribution] = useState([]);

//     useEffect(() => {
//         const fetchUserContributionData = async () => {

//             try {
//                 const response = await axios.get(`https://api.github.com/repos/${username}/stats/contributors`);
//                 setContribution(response.data);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//         fetchUserContributionData();
//     }, [username]);

//     return (
//         <div className="contribution_graph">
//             {contribution.map((con) => {
//                 <div key={contribution.author.id}>
//                     <p>{contribution.author.login}</p>
//                     <p>{contribution.total}</p>
//                 </div>
//             })}
//         </div>
//     );
// };

// export default ContributionGraph;


