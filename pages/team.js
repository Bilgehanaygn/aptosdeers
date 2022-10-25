import React from 'react';
import Layout from '../components/Layout/Layout';
import TeamComponent from '../components/Team/Team';

const Team = () => {


    return (
        <Layout children={<TeamComponent/>} />
    )
}

export default Team;