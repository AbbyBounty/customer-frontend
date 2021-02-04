import { AvailableServicesComponent } from './../../available-services/available-services.component';
import { ShopDetailsComponent } from './../../shop-details/shop-details.component';
import { VehicleAddComponent } from './../../vehicle/vehicle-add/vehicle-add.component';
import { VehicleListComponent } from './../../vehicle/vehicle-list/vehicle-list.component';
import { ShopComponent } from './../../shop/shop.component';
import { RegisterComponent } from './../../register/register.component';
import { OrderHistoryComponent } from './../../order-history/order-history.component';
import { OfferComponent } from './../../offer/offer.component';
import { LoginComponent } from './../../login/login.component';
import { FeedbackComponent } from './../../feedback/feedback.component';
import { CartComponent } from './../../cart/cart.component';
import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',        component: DashboardComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'cart',        component: CartComponent },
    { path: 'feedback',        component: FeedbackComponent },
    { path: 'login',        component: LoginComponent },
    { path: 'offer',        component: OfferComponent },
    { path: 'order-history',        component: OrderHistoryComponent },
    { path: 'register',        component: RegisterComponent },
    { path: 'shop',        component: ShopComponent },
    { path: 'vehicle',        component: VehicleListComponent },
    { path: 'shop-details',        component: ShopDetailsComponent },
    { path: 'available-services',        component:AvailableServicesComponent },
    { path: 'register',        component:RegisterComponent },

    { path: 'vehicle-add',        component: VehicleAddComponent }

];
