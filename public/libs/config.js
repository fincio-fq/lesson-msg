/**
 * Created by fincio on 2017/1/5.
 */

require.config({
    baseUrl: '/studyit1/public',
    paths: {
        jquery: 'assets/jquery/jquery',
        cookie: 'assets/jquery-cookie/jquery.cookie',
        bootstrap: 'assets/bootstrap/js/bootstrap.min',
        template: 'assets/artTemplate/template',
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});
