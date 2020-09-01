import get from 'lodash/get';
import Box from '@spraoi/base/Box';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from 'react-simple-maps';
import { useTheme } from 'styled-components';

const Map = ({
  annotationColor: annotationColorProp,
  geography,
  mapColor: mapColorProp,
  markers,
  projectionConfig,
  sx,
  viewHeight,
  viewWidth,
}) => {
  const theme = useTheme();

  const annotationColor = get(
    theme.colors,
    annotationColorProp,
    theme.colors.accentSecondaryDark
  );

  const mapColor = get(theme.colors, mapColorProp, theme.colors.primary);

  return (
    <Box
      as={ComposableMap}
      height={viewHeight}
      projection="geoMercator"
      projectionConfig={projectionConfig}
      style={{ height: 'auto', width: '100%' }}
      sx={{ bg: 'white', borderRadius: 2, boxShadow: 3, ...sx }}
      width={viewWidth}
    >
      <Graticule stroke={theme.colors.border} />
      <Geographies geography={geography}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: mapColor, outline: 'none' },
                hover: { fill: mapColor, outline: 'none' },
                pressed: { fill: mapColor, outline: 'none' },
              }}
            />
          ))
        }
      </Geographies>
      {markers.map(
        ({ annotationProps, annotationTextProps, coordinates, name }) => (
          <React.Fragment key={name}>
            <Annotation
              connectorProps={{
                stroke: annotationColor,
                strokeLinecap: 'round',
                strokeWidth: 2,
              }}
              subject={coordinates}
              {...annotationProps}
            >
              <text
                alignmentBaseline="middle"
                fill={annotationColor}
                style={{
                  fontSize: theme.fontSizes[3],
                  fontWeight: theme.fontWeights.semibold,
                }}
                {...annotationTextProps}
              >
                {name}
              </text>
            </Annotation>
            <Marker key={name} coordinates={coordinates}>
              <circle fill={annotationColor} r={3} />
            </Marker>
          </React.Fragment>
        )
      )}
    </Box>
  );
};

Map.propTypes = {
  annotationColor: PropTypes.string,
  geography: PropTypes.shape({}).isRequired,
  mapColor: PropTypes.string,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      annotationProps: PropTypes.shape({}),
      annotationTextProps: PropTypes.shape({}),
      coordinates: PropTypes.arrayOf(PropTypes.number),
      name: PropTypes.string,
    })
  ).isRequired,
  projectionConfig: PropTypes.shape({
    center: PropTypes.arrayOf(PropTypes.number),
    scale: PropTypes.number,
  }).isRequired,
  sx: PropTypes.shape({}),
  viewHeight: PropTypes.number.isRequired,
  viewWidth: PropTypes.number.isRequired,
};

Map.defaultProps = {
  annotationColor: null,
  mapColor: null,
  sx: {},
};

export default Map;
