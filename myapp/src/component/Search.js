import React, { useEffect, useLayoutEffect, useState } from 'react'
import Restaurant from './Restaurant'
import './style.css'
import Form from 'react-bootstrap/Form'
import Cards from './Cards'

const Search = () => {

    const [fdata, setFdata] = useState(Restaurant);  //useState
    // console.log(fdata);

    const [copydata, setCopyData] = useState([]);
    // console.log(copydata);

    const changeData = (e) => {   //search filter
        // console.log(e);
        let getChanges = e.toLowerCase();

        if (getChanges == "")
            setCopyData(Restaurant);
        else {
            let filterdata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getChanges);
            })
            setCopyData(filterdata);
        }
    }

    const zomatologo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmpvwZjChJF5c1WX3C4pAi8DJoBc9QJG2jt9ldAfA5Q&s"
    const searchicon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwCn9djwBfoCa2o66vmARLj90277prhAzZyO-tfs&s"

    useEffect(() => {     //useEffect hook
        setCopyData(Restaurant);
    }, [])

    return (
        <>
            <div className="container">
                <img src={zomatologo} alt="" />
                <h2>Search Filter App</h2>
            </div>
            <Form>
                <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control type="text"
                        onChange={(e) => changeData(e.target.value)}
                        placeholder="Search By Restaurant" />
                </Form.Group>
                <button className="btn">
                    <img src={searchicon} alt="" />
                </button>
            </Form>

            <section className="item_section mt-2 container">
                <h2 className="px-4" >Restaurants Open Now</h2>

                <div className="row mt-2">
                    {copydata && copydata.length ? <Cards data={copydata} /> : "Invalid Search"}  {/*passing props*/}
                </div>

            </section>
        </>
    )
}

export default Search;
