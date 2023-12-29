import React, { useEffect } from 'react';
// import  NGL  from 'ngl';

// export default function MolecularViewer() {
//     useEffect(() => {
//         // Create NGL stage
//         const stage = new NGL.Stage('ngl-container');

//         // Load molecular structure
//         stage.loadFile('../assets/1btl.pdb').then((component) => {
//             // Auto view the structure
//             stage.autoView();

//             // Handle any additional customization or interactions here
//         });

//         // Cleanup when the component unmounts
//         return () => {
//             stage.dispose();
//         };
//     }, []);

//     return <div id="ngl-container" style={{ width: '100%', height: '500px' }} />;
// };

// export default MolecularViewer;
import Molstar from "molstar-react";

export default function MolecularViewer() {

    return (
        <div>
            <Molstar pdbId="1LOL" />
        </div>
    );
}
