import { Platform, StatusBar, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginTop: 16,
    marginBottom: 64,
    paddingHorizontal: 16
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  logo: {
    height: 12,
    width: 90
  },
  signup: {
    fontSize: 12,
    color: 'rgb(47,155,216)',
    letterSpacing: -0.64
  },
  body: {
    paddingHorizontal: 16
  },
  title: {
    flexDirection: 'row',
    marginBottom: 16
  },
  titleText: {
    fontSize: 24,
    letterSpacing: -0.75
  },
  inputBox: {
    height: 49,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgb(225,225,225)',
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10
  },
  inputHeader: {
    fontSize: 10,
    marginBottom: 2
  },
  textInput: {
    height: 17
  },
  loginButton: {
    backgroundColor: 'rgb(47,155,216)',
    borderRadius: 2,
    height: 33,
    marginBottom: 8,
    paddingVertical: 8
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: 'rgb(59,89,152)',
    borderRadius: 2,
    height: 33,
    marginBottom: 24,
    padding: 8
  },
  loginText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    color: 'rgb(225,225,225)',
    letterSpacing: -0.44
  }
});
