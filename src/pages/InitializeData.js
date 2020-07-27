import React, {useState, useEffect} from "react";
import {Container} from 'reactstrap'
import LoadingBar from '../components/common/LoadingBar'
import seedApi from '../apis/SeedApi'
import history from "../helpers/history";
const InitializeData = () => {
    const [status1, setStatus1] = useState('')
    const [status2, setStatus2] = useState('')
    const [status3, setStatus3] = useState('')
    useEffect(() => {
        seedApi.user().then(() => {
            setStatus1('ok')
        })
        seedApi.restaurants().then(() => {
            setStatus2('ok')
        })
        seedApi.restaurantImages().then(() => {
            setStatus3('ok')
        })
    },[]);

    useEffect(() => {
        if(status1 && status2 && status3) {
            history.push('/')
        }
    },[status1, status2, status3])

    return (
        <Container>
            <p>Wait for seeding data . . .</p>

            {status1 && <p>Seed user: done</p>}
            {status2 && <p>Seed restaurants: done</p>}
            {status3 && <p>Seed image for restaurants: done</p>}
            <p>* seed image may take several minutes. pls wait </p>
            <LoadingBar time='1s'/>
        </Container>
    )
};

export default InitializeData;