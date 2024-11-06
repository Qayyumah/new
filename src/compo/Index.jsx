import React from 'react'
import '../asset/style.css'
import { FiMoreHorizontal } from 'react-icons/fi'
import { MdAdd, MdMacroOff,} from 'react-icons/md'
import { IoFilter } from 'react-icons/io5'

const Index = () => {
  return (
    <section>
        <div className='title'>
            <h1>Application tracker</h1>
            <div style={{display:'flex', 
                flexDirection:'row', 
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <p>paragraph here</p>
                <div className='filter'>
                    <IoFilter style={{fontSize:'30px'}}/>
                    <p style={{marginTop:'0'}}>Filter</p>
                </div>
            </div>
        </div>
        <main>
            <div className='applied'>
                <h3>Applied</h3>
                <div className='applied-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='applied-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
                <div className='applied-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='applied-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
                <div className='applied-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='applied-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='interviewed'>
                <h3>Interviewed</h3>
                <div className='inter-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='inter-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='offer'>
                <h3>Made offer</h3>
                <div className='offer-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='offer-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
                <div className='offer-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='offer-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hired'>
                <h3>Hired</h3>
                <div className='hire-box'>
                    <div className='ico'>
                        <div className='ico-head'>
                            <h4>Harper Store</h4>
                            <a>Link Here</a>
                        </div>
                        <FiMoreHorizontal style={{fontSize:'23px', color:'#ccc'}}/>
                    </div>
                    <div className='hire-subsec'>
                        <div className='col-1'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-2'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                        <div className='col-3'>
                            <MdMacroOff/>
                            <p>Text here</p>
                        </div>
                    </div>
                </div>
            </div>
            <div/>
        </main>
        <div className='btn-container'>
            <div className='btn'>
                <a>
                    <MdAdd/>
                    add applicant
                </a>
            </div>
        </div>
    </section>
  )
}

export default Index