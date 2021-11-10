import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCheckins } from "../../store/checkins";
import './Checkins.css';

const Checkins = () => {
    const dispatch = useDispatch();
    const checkins = useSelector((state) => Object.values(state.checkins));


    useEffect(() => {
        dispatch(getCheckins());
    }, [dispatch]);

    return (
        <div>
            <h1>Checkins</h1>
            {checkins.map(check => {
                return (
                    <>
                        <div>
                            <span className="checkinText">{check.comment}</span>
                        </div>
                    </>
                )
            })}

        </div>
    )
}

export default Checkins;
