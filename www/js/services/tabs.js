angular.module('starter.services1', [])
    .factory('Tabs', function() {
        return [
            {
                value: 'all',
                label: '最新'
            },
            {
                value: 'share',
                label: '分享'
            },
            {
                value: 'ask',
                label: '问答'
            },
            {
                value: 'job',
                label: '招聘'
            },
            {
                value: undefined,
                label: '其他'
            }
        ];
    });
