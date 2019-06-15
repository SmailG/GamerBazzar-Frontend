import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';


const MainHero = ({ title, image, alt }) => {

    return (

        <Grid.Row className="main">
            <Grid.Column className="main_content" width={16} verticalAlign="middle">
             <div className="main_text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed sagittis faucibus velit eget eleifend.</p>
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
       
    );
}

export default MainHero;