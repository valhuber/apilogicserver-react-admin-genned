import { React } from "react";
import { List,
    Datagrid,
    TextField,
    DateField,
    NumberField,
    EditButton,
} from "react-admin";
import Grid from '@material-ui/core/Grid';
import { TabbedShowLayout, Tab } from 'react-admin';

import {
  Edit,
  Show,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateInput,
  NumberInput,
  SimpleShowLayout,
  ReferenceManyField,
  ShowController,
  useRecordContext
} from "react-admin";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const customerFilters = [
    <TextInput source="q" label="Search" alwaysOn />
];


export const CustomerCustomerDemoList = props => (
    <List filters={customerFilters} perPage={10}  {...props} >
        <Datagrid rowClick="show">
            // ApiLogicServer_list_columns
            <TextField source="Id"/>
            <TextField source="Customer.CompanyName"/>
            <EditButton />
        </Datagrid>
    </List>
);


export const CustomerCustomerDemoEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_edit_columns
            <TextInput source="Id"/>
            <TextInput source="CustomerTypeId"/>
        </SimpleForm>
    </Edit>
);


export const CustomerCustomerDemoAdd = props => (
    <Edit {...props}>
        <SimpleForm>
            // ApiLogicServer_add_columns
            <TextField source="Id"/>
            <TextField source="CustomerTypeId"/>
        </SimpleForm>
    </Edit>
);


const CustomerCustomerDemoTitle = ({ record }) => {
    return <span>Post {record ? `ID: "${record.id}" ContactName: "${record.ContactName}"` : ''}</span>;
};


const ShowField = ({ source }) => {
  const record = useRecordContext();
  return record ? (
    <Grid item xs={3}>
      <Typography variant="body2" color="textSecondary" component="p">
        {source}
      </Typography>
      <Typography variant="body2" component="p">
        {record[source]}
      </Typography>
    </Grid>
  ) : null;
};


export const CustomerCustomerDemoShow = props => {

    return (

    <Show title={<CustomerCustomerDemoTitle />} {...props}>
        <SimpleShowLayout>
            <Typography variant="h5" component="h5" style={{ margin: "30px 0px 30px" }}>
  CustomerCustomerDemo Data:
            </Typography>
            <Grid container spacing={3} margin={5} m={40}>
                <ShowField source="Id"/>
                <ShowField source="Customer.CompanyName"/>
                <ShowField source="CustomerTypeId"/>
            </Grid>
        </SimpleShowLayout>
    </Show>
    );
}