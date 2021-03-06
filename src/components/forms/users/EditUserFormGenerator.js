import React from 'react'
import { Field } from 'redux-form';
import {FormLabel} from '../FormLabel';
import '../../../App.css';
import { renderField } from '../FormInputField'
import validateAndSubmit from './UserFormValidation';

const EditUserFormGenerator = (props) => {
    const {handleSubmit, edit} = props;
	//<form onSubmit={handleSubmit(fields => edit(fields))} id='form1' className='mLabForm'>
    return (<form onSubmit={handleSubmit(fields => validateAndSubmit(fields, props.edit))} id='form1' className='mLabForm'>
	
            <div className='form-row'>
                <FormLabel labelName={'UserID'} fieldName={'User ID'} isRequire={true} />
                <Field component={renderField} type='text' placeholder='User Id' name='id' id='id' />
            </div>
            <div className='form-row'>
                <FormLabel labelName={'userName'} fieldName={'User Name'} isRequire={true} />
                <Field component={renderField} type='text' placeholder='User Name' name='userName' id='userName' />
            </div>
            
            <div className='form-row'>
                <FormLabel labelName={'emailAddress'} fieldName={'Email Address'} isRequire={true} />
                <Field component={renderField} type='email' placeholder='abcdef@mlab.com' name='emailAddress' id='emailAddress' />
            </div>
            <div className='form-row'>
                <FormLabel labelName={'mobileNo'} fieldName={'Mobile No'} isRequire={false} />
                <Field component={renderField} type='number' placeholder='0800000000' name='mobileNo' id='mobileNo' />
            </div>
            <div className='form-row'>
                <FormLabel labelName={'address'} fieldName={'Address'} isRequire={true} />
                <Field component={renderField} type='text' placeholder='Address' name='address' id='address' />
            </div>
            <div className={`submitBtn u-mt30 u-mb80`}>
                <button type="submit">Submit</button>
            </div>
            </form>)
}

export default EditUserFormGenerator;
