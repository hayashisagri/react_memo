import React from "react";

export const AddMemo = (props) => {
  const {memoText, onChange, onClick} = props
  return (
      <>
        <div className="input-area form-group row">
          <input
            className='form-control-sm col'
            placeholder="memoを入力"
            value={memoText}
            onChange={onChange}
          />
          <button className="btn btn-primary btn-sm col-2" onClick={onClick}>追加</button>
        </div>
      </>
  )
}