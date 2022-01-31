import React from 'react';
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { saveQuestionDB } from '../services/questions';
import { useEffect } from 'react';
import useUser from '../hooks/useUser';

export default function Ask() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  let navigate = useNavigate();
  const {isLogged} = useUser();

  useEffect(()=>{
    if(!isLogged) navigate('/login');
  },[isLogged, navigate]);

  async function saveQuestion(event) {
        event.preventDefault();
    await saveQuestionDB({title, body});
    navigate("/");
  };

  return (
    <div className='ask--section section'>
      <form onSubmit={saveQuestion}>
        <div className='ask--title'>
          <label htmlFor="title">Título</label>
          <input id="title" type="text" onChange={(event) => {
            setTitle(event.target.value);
          }} />
        </div>

        <label htmlFor="body">Cuerpo</label>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Realiza una pregunta en stackOverglow</p>"
          onReady={editor => {
            const data = editor.getData();
            setBody(data);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBody(data);
          }}
        />
        <button type="submit" className='custom--btn'>Envia pregunta</button>
      </form>
    </div>
  );
}