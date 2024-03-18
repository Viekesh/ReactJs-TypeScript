import { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./DarftJsEditor.scss";
import { EditorState, convertToRaw } from "draft-js";
import drafttoHtml from "draftjs-to-html";




class DraftJsEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {

        const { editorState } = this.state;

        // console.log(editorState.getCurrentContent());

        // console.log(convertToRaw(editorState.getCurrentContent()));

        console.log(drafttoHtml(convertToRaw(editorState.getCurrentContent())));

        return (
            <>
                <section className="draft_js_editor">
                    <div className="editor_box">
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChange}
                        />

                        <textarea
                            disabled
                            value={drafttoHtml(convertToRaw(editorState.getCurrentContent()))}
                        ></textarea>

                    </div>
                </section>
            </>
        )
    }
};



export default DraftJsEditor;







// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import "./DarftJsEditor.scss";
// import { useState } from "react";



// const DarftJsEditor = () => {

//     const [edtrState, setEdtrState] = useState();

//     return (
//         <>
//             <section className="draft_js_editor">
//                 <div className="editor_box">
//                     <Editor
//                         editorState={editorState}
//                         toolbarClassName="toolbarClassName"
//                         wrapperClassName="wrapperClassName"
//                         editorClassName="editorClassName"
//                         onEditorStateChange={this.onEditorStateChange}
//                     />
//                 </div>
//             </section>
//         </>
//     )
// };



// export default DarftJsEditor;