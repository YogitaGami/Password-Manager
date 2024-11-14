import React, { useRef, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({});
  const [passwordArray, setpasswordArray] = useState([]);

  const getPasswords= async()=>{
    let req = await fetch("http://localhost:3000/")
    let passwords = await req.json()
    setpasswordArray(passwords);
  }

  useEffect(() => {
    getPasswords()
    
  }, []);

  const showPassword = () => {
    if (ref.current.src.includes("src/assets/eyecross.svg")) {
      ref.current.src = "src/assets/eye.svg";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "src/assets/eyecross.svg";
      passwordRef.current.type = "text";
    }
  };

  const saveBtn = async() => {
      let newId = uuidv4();
      setpasswordArray([...passwordArray, {...form, id: newId}]);
      let res = await fetch("http://localhost:3000/", {method: "POST", headers: { "Content-Type": "application/json"}, body:JSON.stringify({...form, id: newId}) })
      await setform({ site: "", username: "", password: "" })
  };
  const deleteBtn = async(id) => {
    let conf= confirm("Are you sure, you want to delete!")
    console.log(JSON.stringify(id))
    if(conf){
      await setpasswordArray(passwordArray.filter(item=>item.id !== id));
      let res = await fetch("http://localhost:3000/", {method: "DELETE", headers: { "Content-Type": "application/json"}, body:JSON.stringify({id})})
    }
  };
  const editBtn = async(id) => {
    setform(passwordArray.find(i=> i.id === id))
    console.log(id)
    // if any such id exist in database, delete it
    await fetch("http://localhost:3000/", {method: "DELETE", headers: { "Content-Type": "application/json"}, body:JSON.stringify({id}) })
    setpasswordArray(passwordArray.filter(i => i.id !== id));
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copytext = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="PassMang w-[80%] max-md:w-[90%] my-7 m-auto ">
        <div className="title flex gap-0 font-bold text-3xl md:text-2xl max-md:text-xl justify-center">
          <span className="text-green-400">&lt;</span>
          <h1>
            Pass<span className="text-green-500">OP</span>
          </h1>
          <span className="text-green-400">&#x2f;</span>
          <span className="text-green-400">&gt;</span>
        </div>

        <p className="heading text-center text-lg md:text-sm max-md:text-xs">Your own Password Manager</p>

        <input
          value={form.site}
          name="site"
          onChange={handleChange}
          className="w-[95%] border-green-400 border-[1px] rounded-full p-0.5 pl-4 m-4 max-md:m-2 max-md:font-[12px]"
          type="text"
          placeholder="Enter website URL"
        />

        <div className="2rowInput, flex gap-10 lg:gap-7 max-lg:flex-col max-lg:gap-0 ">
          <input
            value={form.username}
            name="username"
            onChange={handleChange}
            className="w-[74%] lg:w-[65%] max-sm:w-[95%] border-green-400 border-[1px] rounded-full p-0.5 pl-4 m-4 max-md:m-2 max-md:font-[12px]"
            type="text"
            placeholder="Enter Username"
          />
          <div className="passFeild relative w-[23.5%] lg:w-[25%] md:w-[50%] sm:w-[45%] max-sm:w-[95%]">
            <input
              ref={passwordRef}
              value={form.password}
              name="password"
              onChange={handleChange}
              className="w-[100%] border-green-400 border-[1px] rounded-full p-1 pr-0 pl-4 m-4 max-md:m-2 lg:ml-0 max-lg:ml-4 max-md:font-[12px]"
              placeholder="Enter Password"
              type="password"
            />
            <img
              ref={ref}
              className="absolute bottom-6 right-3 size-5 cursor-pointer max-md:bottom-4"
              onClick={showPassword}
              src="src/assets/eye.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center m-3">
          <button
            onClick={saveBtn}
            className="save bg-green-500 hover:bg-green-300 border-green-800 border-[1px] p-2 px-4 max-md:p-1 max-md:px-2 justify-center rounded-full flex gap-2 max-md:gap-1"
          >
            <img className="max-md:size-5" src="src/assets/save.svg" alt="" />
            <span>Save</span>
          </button>
        </div>

        <h1 className="history font-bold text-xl mt-5 max-md:text-sm">Your Passwords</h1>
        {passwordArray.length === 0 && (
          <div className="pass text-sm mt-4">No passwords to show.</div>
        )}

        {passwordArray.length != 0 && (
          <table className="table-auto w-full mt-4 mb-16 rounded-md overflow-hidden max-md:text-[12px]">
            <thead className="bg-green-700 text-white">
              <tr>
                <th className="py-2">Site</th>
                <th className="py-2">Username</th>
                <th className="py-2">Password</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#c0fba3]">
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-1 border border-green-500 text-center">
                      <div className="flex gap-3 max-md:gap-1 justify-center items-center ">
                        <a href={item.site} target="_blank">
                          {item.site}
                        </a>
                        <img
                          className="cursor-pointer max-md:size-4"
                          onClick={() => {
                            copytext(item.site);
                          }}
                          src="src/assets/content_copy.svg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="border border-green-500 text-center">
                      <div className="flex gap-3 max-md:gap-1 justify-center items-center">
                        {item.username}
                        <img
                          className="cursor-pointer max-md:size-4"
                          onClick={() => {
                            copytext(item.username);
                          }}
                          src="src/assets/content_copy.svg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="border border-green-500 text-center">
                      <div className="flex gap-3 max-md:gap-1 justify-center items-center">
                        {item.password}
                        <img
                          className="cursor-pointer max-md:size-4"
                          onClick={() => {
                            copytext(item.password);
                          }}
                          src="src/assets/content_copy.svg"
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="border border-green-500 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <img
                          className="cursor-pointer mx-1 max-md:size-4"
                          onClick={() =>{editBtn(item.id)}}
                          src="src/assets/edit.svg"
                          alt=""
                        />
                        <img
                          className="cursor-pointer mx-1 max-md:size-4"
                          onClick={() =>{deleteBtn(item.id)}}
                          src="src/assets/delete.svg"
                          alt=""
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Manager;
