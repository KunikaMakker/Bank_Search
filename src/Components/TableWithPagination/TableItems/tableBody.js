import React from 'react';
import {Table, Button, Icon} from 'semantic-ui-react';

const TableBody = (props) => {
    let btnColor = 'black';
    return(
        <Table.Body>
            {props.apiResponse.map((key,value) => {
                return(<Table.Row key={value}>
                    <Table.Cell>
                        <Button key={key.ifsc} onClick={()=>props.addToFav(key.ifsc)}>
                            {
                                Object.values(localStorage).map((data,index) =>{
                                   if(localStorage.getItem(key.ifsc))
                                   {
                                        btnColor = 'red'
                                   }
                                   else{
                                       btnColor = 'black';
                                   }
                                   return '';
                                })
                            }
                            <Icon name='heart' style={{color: btnColor}}/>
                        </Button></Table.Cell>
                    {Object.values(key).map((data, index) => {
                        return(<Table.Cell key={index}>{data}</Table.Cell>)
                    })}
                </Table.Row>);
            })}
        </Table.Body>
    
    );
}
export default TableBody;