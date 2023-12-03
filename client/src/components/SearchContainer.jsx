import { FormRow, FormRowSelect, SubmitBtn } from '.';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';
import { useAllJobsContext } from '../pages/AllJobs';

const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  const { search, jobStatus, jobType, sort } = searchValues;
  const submit = useSubmit();

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>Pesquisa</h5>
        <div className='form-center'>
          <FormRow
            type='search'
            name='search'
            labelText='empresa / cargo'
            defaultValue={search}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText='status'
            name='jobStatus'
            list={['todos', ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText='modalidade'
            name='jobType'
            list={['todos', ...Object.values(JOB_TYPE)]}
            defaultValue={jobType}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText='classificação'
            name='sort'
            list={[...Object.values(JOB_SORT_BY)]}
            defaultValue={sort}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
            Resetar
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};
export default SearchContainer;
