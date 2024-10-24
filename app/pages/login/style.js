import { StyleSheet } from 'react-native';
import Login from '.';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#000000',
    height: '100%',
  },
  boxTop: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    marginTop: 60,
  },
  imageLogo: {
    width: '100%',
    height: '100%',
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  titleTextLeft: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  titleTextRight: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  boxBottom: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  input: {
    width: '90%',
    padding: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  login: {
    backgroundColor: '#fbdb5b',
    width: '90%',
    padding: 16,
    borderRadius: 20,
  },
  buttonText: {
    color: '#000001',
    fontSize: 20,
    textAlign: 'center',
  },
});
