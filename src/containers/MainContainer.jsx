import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'
import './MainContainer.scss';

class MainContainer extends Component {
    render() {
        return (
            <Grid>
            <Grid.Row className="main">
                <Grid.Column className="main_content" width={16} verticalAlign="middle">
                   <div className="main_text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed sagittis faucibus velit eget eleifend. 
                    </p>
                   </div>
                   <div className="main_buttons">
                       <Button>
                            BUY GOODS
                       </Button>

                       <Button >
                            SELL GOODS
                       </Button>
                   </div>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row className="popular">
            </Grid.Row>

            <Grid.Row className="recommended">
            </Grid.Row>
        </Grid>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

