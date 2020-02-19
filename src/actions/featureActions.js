export const addFeature = featureID => {
  return { type: 'ADD_FEATURE', payload: featureID }
}