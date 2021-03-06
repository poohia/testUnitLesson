<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ApiTest extends WebTestCase
{
    public function testApiAddition(): void
    {
        $client = static::createClient();
        // Request a specific page
        $client->jsonRequest('POST', '/api/calculator/addition', [
                'value1' => '1',
                'value2' => '1',
            ]);
        $response = $client->getResponse();
        $this->assertResponseIsSuccessful();
        $this->assertJson($response->getContent());
        $responseData = json_decode($response->getContent(), true);
        $this->assertEquals(['value' => 2], $responseData);
    }
}
