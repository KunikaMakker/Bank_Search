import React from 'react';
import {Pagination, Dropdown, Table, Label } from 'semantic-ui-react';

const PaginationWithDropdown = (props) => {
    return(
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='6'>
                    <Label>Size Of Table</Label>
                <Dropdown
                    compact
                    selection
                    value={props.pageOffset}
                    options={[5,10,15,20].map((value) => ({key:value, value, text:value}))}
                    onChange={props.onPageOffsetChange}
                />
                {/* <Input onChange={props.onPageOffsetChange}></Input> */}
                </Table.HeaderCell>
                <Table.HeaderCell colSpan='3'>
                <Pagination
                    activePage={props.activePage}
                    onPageChange={props.handlePaginationChange}
                    totalPages={Math.ceil(props.rowDataLength / props.pageOffset)}
                    boundaryRange={0}
                    siblingRange={1}
                    pointing
                    secondary
                />
            </Table.HeaderCell></Table.Row></Table.Footer>
    );
}
export default PaginationWithDropdown;