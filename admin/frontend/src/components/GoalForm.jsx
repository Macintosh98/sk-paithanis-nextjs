import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  const [image, setImage] = useState();
  const [viewimage, setViewImage] = useState();

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    const profiledata = new FormData();

    profiledata.append("text", text);
    profiledata.append("file", image);

    // console.log("first",profiledata.get("file"),text,image)
    dispatch(createGoal(profiledata))
    setText('')
    setImage()
    setViewImage()
  }

  function loadimage(e) {
    setImage(e.target.files[0]);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = (e) => setViewImage(reader.result);
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

                       
                {viewimage && <img
                            alt={"profile"}
                            height="150px"
                            width="150px"
                            className="rounded-circle"
                            src={viewimage}
                          />}
                          
                          
                        <div className="custom-file">
                        <label className="custom-file-label" htmlFor="customFile">Image</label>
                            <input name="image" className="custom-file-input" type="file" onChange={loadimage}/>
                          </div>

               
                

        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
