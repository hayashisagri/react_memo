import React, {memo, useState} from "react";
import "./styles.css";
import {AddMemo} from "./components/addMemo";
import dayjs from "dayjs"

export const App = () => {

  const isValidUrl = (str) => {
    try {
      new URL(str)
      return true
    } catch (err) {
      return false
    }
  }

  let [memoText, setMemoText] = useState([]);
  const [memos, setMemos] = useState([]);

  const onChangeMemoText = (e) => setMemoText(e.target.value);

  const addNewMemos = (memoText) => {
    const newMemos = [...memos, memoText]
    setMemos(newMemos);
    setMemoText([]);
  }

  const onClickAdd = () => {
    if (memoText.length === 0) return;

    const createdAt = dayjs().format("M/D H:mm")

    memoText = [createdAt, memoText]
    const url = memoText[1]
    if (isValidUrl(url)) {
      fetch(url).then((response) => response.text()).then((responseText) => {
        const parsedResponse = (new window.DOMParser()).parseFromString(responseText, 'text/html')
        if (parsedResponse.title) {
          memoText.push(parsedResponse.title)
        }
        addNewMemos(memoText)
      })
    }
    addNewMemos(memoText)
  };
  const onClickDelete = (index) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    setMemos(newMemos)
  }

  return (
    <>
      <AddMemo memoText={memoText} onChange={onChangeMemoText} onClick={onClickAdd} />
      <div className="memo-area">
        <p className="title">memo</p>
          <table className='table'>
            <thead>
              <th scope='col'>date time</th>
              <th scope='col'>memo</th>
              <th scope='col'>page title</th>
            </thead>
            <tbody>
            {memos.map((memo,index) => {
              return (
                <tr key={index}>
                  <ht scope='row'>{memo[0]}</ht>
                  <td>{memo[1]}</td>
                  <td>{memo[2] ? memo[2]: null}</td>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </tr>
                );
              })}
            </tbody>
          </table>
      </div>
    </>
  );
};
