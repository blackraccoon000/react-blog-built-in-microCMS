import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IconFocus from '../L1_Atoms/IconFocus';
import IconSearchKeySlash from '../L1_Atoms/IconSearchKeySlash';

const Form = styled.form`
  margin-left: 15px;
  padding: 5px;
`;

const Label = styled.label.attrs((props) => ({}))`
  background-color: transparent;
  /* border: 2px solid rgb(139, 140, 142); */
  border-radius: 6px;
  box-sizing: border-box;
  padding: 8px;
  position: relative;

  &:focus-within {
    background-color: white;
    /* border: 2px solid #a9aaad; */

    & svg {
      width: 20px;
    }
  }
`;

const Input = styled.input.attrs((props) => ({
  name: 'q',
  backgroundColor: '#444d56',
  placeholder: 'Search or jump to…',
  type: 'text',
  minlength: '4',
  maxlength: '8',
  size: '10',
  onChange: (e) => console.log(e.target.value),
}))`
  background-color: transparent;
  border: none;
  color: #5a616f;
  font-size: 14px;
  outline: none;
  padding: 0;
  transition: 0.5s;
  width: 0;

  &:focus {
    width: 170px;
    padding: 0px 10px;
  }

  &::placeholder {
    color: #8b8c8e;
    margin: 5px 20px;
  }
`;

const SearchKeySlash = styled(IconSearchKeySlash)`
  position: relative;
  top: 4px;
  width: 0px;
`;

const Focus = styled(IconFocus)`
  top: 2px;
  position: relative;
`;

const SearchForm = (props) => {
  return (
    <Form>
      <Label htmlFor="search-form">
        <Focus />
        <Input
          id="search-form"
          onFocus={props.toggleFn}
          onBlur={props.toggleFn}
        />
        <SearchKeySlash />
      </Label>
    </Form>
  );
};

SearchForm.propTypes = {
  flag: propTypes.bool,
};

SearchForm.defaultProps = {
  flag: false,
};

export default SearchForm;
