import {useState} from "react";
import axios from "axios";


const Text = () => {
    const [textData, setTextData] = useState({
        username: "",
        text: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTextData({...textData, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("데이터 제출", textData);

        axios.post("/api/v1/boards/insert", {
            username: textData.username,
            text: textData.text
        }).then((res) => {
            if (res.status === 200) {
                alert("작성이 되었습니다.");
                window.location.reload();
            }
        }).catch((err) => {
            console.log(err);
            alert("작성 실패")
        });
    };

    return (
        <div className="text-box">
            <form onSubmit={handleSubmit}>
                <label htmlFor="게시물" className="text-insert">
                    작성하기->
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={textData.username}
                    onChange={handleInputChange}
                    className="text-input"
                />
                <textarea
                    name="text"
                    value={textData.text}
                    onChange={handleInputChange}
                    className="text-input"
                ></textarea>
                <button type= "submit" className="text-button">작성하기</button>
            </form>
        </div>
    )
}
export default Text;