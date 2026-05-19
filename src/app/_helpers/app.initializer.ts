import { catchError, of } from 'rxjs';

import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start before positioning view
        accountService.refreshToken().subscribe().add(() => resolve(true));
    });
}