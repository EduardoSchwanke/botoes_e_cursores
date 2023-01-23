import { GiHamburgerMenu } from "react-icons/gi";
import { RxCursorArrow } from "react-icons/rx";
import { MdBlock } from "react-icons/md";
import { RiLoader4Line } from "react-icons/ri";
import { SlCursorMove } from "react-icons/sl";
import { BiLoaderAlt } from "react-icons/bi";
import { useState } from "react";
import { useEffect } from "react";

function App() {

  const [button, setButton] = useState()

  useEffect(() => {
    console.log(button)
  }, [button])

  return (
    <div className="bg-black flex w-full h-[100vh]">
      <div className="w-[75%] p-11">
        <div className="text-white">
          <h1 className="text-4xl pb-2">Tipos de botão</h1>
          <p>Dentro de um layout, botões servem para destacar ações importantes a serem tomadas.</p>
          <p>Acompanhe abaixo um exemplo de tipos e propriedades.</p>
        </div> 

        <div className="mt-8 flex">
          <div className="flex text-white bg-[#1C162C] flex flex-col w-28 items-center gap-11 pt-20 pb-8 text-xs rounded-l-xl">
              <p>DEFAULT</p>
              <p>HOVER</p>
              <p>FOCUS</p>
              <p>DISABLED</p>
              <p>LOADING</p>
              <p>MOVIABLE</p>
          </div>

          <div className="flex flex-col rounded-r-xl bg-[#1C162C]">
            <div className="flex bg-[#1C162C] w-full h-11 text-white items-center pl-16 pr-2 text-xs rounded-tr-xl">
              <p className="w-44 flex justify-center">BOTÃO PRIMÁRIO</p>
              <p className="w-44 flex justify-center">BOTÃO SEGUNDÁRIO</p>
              <p className="w-44 flex justify-center">BOTÃO TERCIÁRIO</p>
              <p className="w-14 flex justify-center">CURSOR</p>
            </div>

            <div 
              className="flex bg-black text-white items-center pl-16 text-xs mr-2 pt-6"
              onClick={() => {
                setButton({
                  bg_primary: '8257E5',
                  bg_segundary: '3C3748',
                  icon: null,
                  border: null,
                  cursor: 'default'
                })
              }}
            >
              <button className="bg-[#8257E5] py-3 mx-2 rounded-3xl w-40 flex justify-center">DEFAULT PRIMARY</button>
              <button className="bg-[#3C3748] py-3 mx-2 rounded-3xl w-40 flex justify-center">DEFAULT SEGUNDARY</button>
              <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center">DEFAULT TERTIARY</button>
              <button className="py-3 mx-2 rounded-3xl w-10 flex justify-center"><RxCursorArrow /></button>
            </div>

            <div 
              className="flex bg-black text-white items-center pl-16 text-xs mr-2 pt-5"
              onClick={() => {
                setButton({
                  bg_primary: '9572e5',
                  bg_segundary: '605872',
                  icon: null,
                  border: null,
                  cursor: 'default'
                })
              }}
            >
              <button className="bg-[#9572e5] py-3 mx-2 rounded-3xl w-36 mx-4 flex justify-center">HOVER PRIMARY</button>
              <button className="bg-[#605872] py-3 mx-2 rounded-3xl w-36 mx-4 flex justify-center">HOVER SEGUNDARY</button>
              <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center">HOVER TERTIARY</button>
              <button className="py-3 mx-2 rounded-3xl w-10 flex justify-center"><RxCursorArrow /></button>
            </div>

            <div 
              className="flex bg-black text-white items-center pl-16 text-xs mr-2 pt-5"
              onClick={() => {
                setButton({
                  bg_primary: '8257E5',
                  bg_segundary: '3C3748',
                  icon: null,
                  border: 'border',
                  cursor: 'default'
                })
              }}  
            >
              <button className="bg-[#8257E5] py-3 mx-2 rounded-3xl w-36 mx-4 flex justify-center border border-2">FOCUS PRIMARY</button>
              <button className="bg-[#3C3748] py-3 mx-2 rounded-3xl w-36 mx-4 flex justify-center border border-2">FOCUS SEGUNDARY</button>
              <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center border border-2">FOCUS TERTIARY</button>
              <button className="py-3 mx-2 rounded-3xl w-10 flex justify-center"><RxCursorArrow /></button>
            </div>

            <div 
              className="flex bg-black text-neutral-400 items-center pl-16 text-xs mr-2 pt-5"
              onClick={() => {
                setButton({
                  bg_primary: '442c7b',
                  bg_segundary: '3C3748',
                  icon: null,
                  border: null,
                  cursor: 'not-allowed',
                  disable: true
                })
              }}  
            >
              <button className="bg-[#442c7b] py-3 mx-2 rounded-3xl w-40 flex justify-center">DISABLED PRIMARY</button>
              <button className="bg-[#3C3748] py-3 mx-2 rounded-3xl w-40 flex justify-center">DISABLED SEGUNDARY</button>
              <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center">DISABLED TERTIARY</button>
              <button className="py-3 mx-2 rounded-3xl w-10 flex justify-center"><MdBlock/></button>
            </div>

            <div 
              className="flex bg-black text-white items-center pl-16 text-xs mr-2 pt-5"
              onClick={() => {
                setButton({
                  bg_primary: '8257E5',
                  bg_segundary: '3C3748',
                  icon: <BiLoaderAlt className="mt-[2px] mr-1 animate-spin"/>,
                  border: null,
                  cursor: 'wait'
                })
              }}   
            >
              <button className="bg-[#8257E5] py-3 mx-2 rounded-3xl w-40 flex items-center justify-center"><BiLoaderAlt className="mt-[2px] mr-1"/>LOADING PRIMARY</button>
              <button className="bg-[#3C3748] py-3 mx-2 rounded-3xl w-40 flex justify-center"><BiLoaderAlt className="mt-[2px] mr-1"/>LOADING SEGUNDARY</button>
              <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center"><BiLoaderAlt className="mt-[2px] mr-1"/>LOADING TERTIARY</button>
              <button className="py-3 mx-2 rounded-3xl w-10 flex justify-center"><RiLoader4Line/></button>
            </div>

            <div 
              className="flex bg-black text-white items-center pl-16 text-xs mr-2 pt-5 mb-2 pb-5"
              onClick={() => {
                setButton({
                  bg_primary: '8257E5',
                  bg_segundary: '3C3748',
                  icon: <GiHamburgerMenu className="mt-[3px] mr-1"/>,
                  border: null,
                  cursor: 'move'
                })
              }}   
            >
              <button className="bg-[#8257E5] py-3 mx-2 rounded-3xl w-40 flex justify-center"><GiHamburgerMenu className="mt-[3px] mr-1"/>MOVABLE PRIMARY</button>
              <button className="bg-[#3C3748] py-3 mx-2 rounded-3xl w-40 flex justify-center"><GiHamburgerMenu className="mt-[3px] mr-1"/>MOVABLE SEGUNDARY</button>
              <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center"><GiHamburgerMenu className="mt-[3px] mr-1"/>MOVABLE TERTIARY</button>
              <button className="py-3 mx-2 rounded-3xl w-10 flex justify-center"><SlCursorMove/></button>
            </div>
          </div>
        </div>

      </div>
      <div className="w-[25%] h-[100vh] bg-[#130F1E] pt-11 flex flex-col items-center">
        <div className="w-[80%] text-white py-8"> 
          <h1 className="text-3xl">Teste os botões</h1>
          <p className="pt-2">Interaja com os botões e observe a mudança de aparência e de cursores</p>
        </div>
        <div className="text-white text-xs flex flex-col gap-6 items-center w-[90%]">
            {
              (button === undefined) ? (
                <>
                  <button className="bg-[#8257E5] py-3 mx-2 rounded-3xl w-[80%] flex justify-center cursor-default">INTERAJA COMIGO</button>
                  <button className="bg-[#3C3748] py-3 mx-2 rounded-3xl w-[80%] flex justify-center cursor-default">INTERAJA COMIGO</button>
                  <button className="py-3 mx-2 rounded-3xl w-40 flex justify-center cursor-default">INTERAJA COMIGO</button>
                </>
              )  : (
                <>
                  <button className={`bg-[#${button.bg_primary}] py-3 mx-2 rounded-3xl w-[80%] flex justify-center cursor-wait ${(button.border !== null) ? 'border border-2' : ''} ${(button.disable === true) ? 'text-neutral-400' : ''}`}>{button.icon}INTERAJA COMIGO</button>
                  <button className={`bg-[#${button.bg_segundary}] py-3 mx-2 rounded-3xl w-[80%] flex justify-center cursor-${button.cursor} ${(button.border !== null) ? 'border border-2' : ''} ${(button.disable === true) ? 'text-neutral-400' : ''}`}>{button.icon}INTERAJA COMIGO</button>
                  <button className={`py-3 mx-2 rounded-3xl w-40 flex justify-center cursor-${button.cursor} ${(button.border !== null) ? 'border border-2' : ''} ${(button.disable === true) ? 'text-neutral-400' : ''}`}>{button.icon}INTERAJA COMIGO</button>
                </>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default App
