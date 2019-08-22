import React from 'react';
import {Table} from 'semantic-ui-react';

const TableHeader = (props) => {
    return(
        <Table.Header>
            <Table.Row>
                {props.bankDetails.columnNames.map((key,value) => {
                    return(<Table.HeaderCell key={key}>{key}</Table.HeaderCell>);
                })}
            </Table.Row>
        </Table.Header>
    );
}
export default TableHeader;