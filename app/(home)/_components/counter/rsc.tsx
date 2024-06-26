import { Typography } from '@repo/core/typography';
import React from 'react';

import { useGlobalStore } from '~/lib/stores/global';

function CounterRSC() {
    // забирает данные из стора, но не ререндерится при изменении на клиенте
    return <Typography>Counter Server: {useGlobalStore.getState().count}</Typography>;
}

export default CounterRSC;
