import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import IconFocus from '../L1_Atoms/IconFocus';
import IconSearchKeySlash from '../L1_Atoms/IconSearchKeySlash';

const Form = styled.form`
  margin-left: calc(1.5rem/1.6);
  padding: calc(.5rem/1.6);
`;

const Label = styled.label.attrs((props) => ({}))`
  background-color: transparent;
  border-radius: calc(.6rem/1.6);
  box-sizing: border-box;
  padding: calc(.8rem/1.6);
  position: relative;

  &:focus-within {
    background-color: white;

    & svg {
      width: calc(2rem/1.6);
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
  font-size: calc(1.4rem/1.6);
  outline: none;
  padding: 0;
  transition: 0.5s;
  width: 0;

  &:focus {
    width: calc(17rem/1.6);
    padding: 0px calc(1rem/1.6);
  }

  &::placeholder {
    color: #8b8c8e;
    margin: calc(.5rem/1.6) calc(2rem/1.6);
  }
`;

const SearchKeySlash = styled(IconSearchKeySlash)`
  position: relative;
  top: calc(.4rem/1.6);
  width: 0;
`;

const SearchForm = (props) => {
  return (
    <Form>
      <Label htmlFor="search-form">
        <IconFocus flag={props.flag}/>
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
