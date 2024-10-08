import AppScreenEnum from '../enums/AppScreenEnum';

type AppScreenParamList = {
  [AppScreenEnum.HOME_NAVIGATOR]: undefined;
  [AppScreenEnum.CUSTOMER_NAVIGATOR]: undefined;
  [AppScreenEnum.CUSTOMER_TAB_NAVIGATOR]: undefined;
  [AppScreenEnum.CUSTOMER_MAP]: undefined;
  [AppScreenEnum.CUSTOMER_LIST]: undefined;
  [AppScreenEnum.CUSTOMER_DETAIL]: { customerId: Customer['customer_id'] }
  [AppScreenEnum.SETTING_NAVIGATOR]: undefined;
  [AppScreenEnum.PROFILE]: { userId: User['user_id'] };
  [AppScreenEnum.ADVANCE_PROFILE]: { userId: User['user_id'] };
};

export default AppScreenParamList;
