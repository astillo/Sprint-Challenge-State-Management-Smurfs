import React from 'react'
import { connect } from 'react-redux'
import { Card, Segment, Button } from 'semantic-ui-react';
import Axios from 'axios';



const SmurfList = props => {
    const deleted = e => {
        Axios.delete(`http://localhost:3333/smurfs/${e.id}`)
            .then(res => {
                alert('user Deleted')
            })
    }

    console.log(props.smurfs)
    return (
        props.smurfs.map(e => {
            return (
                <Card>
                    <Card.Header>
                        Name: {e.name}
                    </Card.Header>
                    <Card.Meta>Age: {e.age}</Card.Meta>
                    <Card.Meta>Height: {e.height}</Card.Meta>
                    <Button onClick={() => deleted(e)}>X</Button>
                </Card>
            )
        })

    )
}

const mapStateToProps = state => ({
    smurfs: state.smurfs
})

export default connect(mapStateToProps, {})(SmurfList)
