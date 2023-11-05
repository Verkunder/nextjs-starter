import { defineConfig } from '@kubb/core';
import createSwagger from '@kubb/swagger';
import createSwaggerClient from '@kubb/swagger-client';
import createSwaggerTanstackQuery from '@kubb/swagger-tanstack-query';
import createSwaggerTS from '@kubb/swagger-ts';
import createSwaggerZod from '@kubb/swagger-zod';

export default defineConfig(async () => {
    return {
        root: '..',
        input: {
            path: 'swagger.json',
        },
        output: {
            path: './src/api',
            clean: true,
        },
        hooks: {
            done: ['prettier ./src/api/ --write'],
        },
        plugins: [
            createSwagger({
                output: false,
                validate: true,
            }),
            createSwaggerTS({
                output: 'models',
                enumType: 'enum',
                dateType: 'date',
                groupBy: { type: 'tag' },
            }),
            createSwaggerClient({
                output: 'axios',
                clientImportPath: '~/lib/axios-client',
                groupBy: { type: 'tag' },
            }),
            createSwaggerTanstackQuery({
                output: 'hooks',
                framework: 'react',
                clientImportPath: '~/lib/axios-client',
                groupBy: { type: 'tag' },
            }),
            createSwaggerZod({
                output: 'zod',
                clientImportPath: '~/lib/axios-client',
                groupBy: { type: 'tag' },
            }),
        ],
    };
});
