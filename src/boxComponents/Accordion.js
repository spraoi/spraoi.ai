import React from 'react';
import PropTypes from 'prop-types';
import Box from '@spraoi/base/Box';
import './styles/accordion.css';

const AccordionContent = ({ content }) => {
  let result = [];
  if (content.length > 0) {
    result = content.reduce((res, row, ix) => {
      res.push(
        <p key={ix}>
          {String.fromCharCode(8226)} {row}
        </p>
      );
      return res;
    }, []);
  }
  return result;
};

const AccordtionSection = ({ title, content }) => {
  return (
    <Box as="li" className="accordion-item">
      <Box as="h4" style={{ textTransform: 'uppercase' }}>
        {title}
      </Box>
      <Box as="div" className="accordion-item-content">
        <AccordionContent content={content} />
      </Box>
    </Box>
  );
};

AccordtionSection.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
};

AccordtionSection.defaultProps = {
  content: [],
  title: '',
};

const Accordion = ({ data }) => {
  const accordionSections = data.reduce((result, row, ix) => {
    result.push(
      <AccordtionSection key={ix} content={row.content} title={row.title} />
    );
    return result;
  }, []);

  return (
    <Box as="ul" className="accordion" margin="4rem">
      {accordionSections}
    </Box>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
      ]),
      title: PropTypes.string,
    })
  ),
};

Accordion.defaultProps = {
  data: [{ content: [], title: '' }],
};

export default Accordion;
