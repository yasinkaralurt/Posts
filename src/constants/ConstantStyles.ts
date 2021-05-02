import ConstantColors from "./ConstantColors";

export default {
  DefaultBorder: {
    // borderBottomColor: ConstantColors.Gray, borderBottomWidth: 1 
  },
  FocusedBorder: {
    // borderBottomColor: ConstantColors.Primary, borderBottomWidth: 1 
  },
  ErrorBorder: {
    borderColor: ConstantColors.Error, borderWidth: 1
  },
  ComponentBorder: { borderColor: ConstantColors.Gray, borderWidth: .5, borderRadius: 4 },
  Header: { fontSize: 18, fontWeight: '600', color: '#fff', textAlign: 'center' },
  Label: { fontSize: 12, color: '#8496a8' },
  Value: { fontSize: 14, color: ConstantColors.Value },
  DatePicker: {
    Label: { fontSize: 12, fontWeight: '600', color: '#8496a8' },
    Value: { fontSize: 18, fontWeight: '600' },
  },

};
