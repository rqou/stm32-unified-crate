<description>External interrupt/event
controller</description>
<groupName>EXTI</groupName>
<addressBlock>
  <offset>0x0</offset>
  <size>0x400</size>
  <usage>registers</usage>
</addressBlock>
<registers>
  <register>
    <name>IMR</name>
    <displayName>IMR</displayName>
    <description>Interrupt mask register
    (EXTI_IMR)</description>
    <addressOffset>0x0</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MR0</name>
        <description>Interrupt Mask on line 0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR1</name>
        <description>Interrupt Mask on line 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR2</name>
        <description>Interrupt Mask on line 2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR3</name>
        <description>Interrupt Mask on line 3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR4</name>
        <description>Interrupt Mask on line 4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR5</name>
        <description>Interrupt Mask on line 5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR6</name>
        <description>Interrupt Mask on line 6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR7</name>
        <description>Interrupt Mask on line 7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR8</name>
        <description>Interrupt Mask on line 8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR9</name>
        <description>Interrupt Mask on line 9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR10</name>
        <description>Interrupt Mask on line 10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR11</name>
        <description>Interrupt Mask on line 11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR12</name>
        <description>Interrupt Mask on line 12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR13</name>
        <description>Interrupt Mask on line 13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR14</name>
        <description>Interrupt Mask on line 14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR15</name>
        <description>Interrupt Mask on line 15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR16</name>
        <description>Interrupt Mask on line 16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR17</name>
        <description>Interrupt Mask on line 17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR18</name>
        <description>Interrupt Mask on line 18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR19</name>
        <description>Interrupt Mask on line 19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR20</name>
        <description>Interrupt Mask on line 20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR21</name>
        <description>Interrupt Mask on line 21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR22</name>
        <description>Interrupt Mask on line 22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>EMR</name>
    <displayName>EMR</displayName>
    <description>Event mask register (EXTI_EMR)</description>
    <addressOffset>0x4</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>MR0</name>
        <description>Event Mask on line 0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR1</name>
        <description>Event Mask on line 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR2</name>
        <description>Event Mask on line 2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR3</name>
        <description>Event Mask on line 3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR4</name>
        <description>Event Mask on line 4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR5</name>
        <description>Event Mask on line 5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR6</name>
        <description>Event Mask on line 6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR7</name>
        <description>Event Mask on line 7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR8</name>
        <description>Event Mask on line 8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR9</name>
        <description>Event Mask on line 9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR10</name>
        <description>Event Mask on line 10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR11</name>
        <description>Event Mask on line 11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR12</name>
        <description>Event Mask on line 12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR13</name>
        <description>Event Mask on line 13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR14</name>
        <description>Event Mask on line 14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR15</name>
        <description>Event Mask on line 15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR16</name>
        <description>Event Mask on line 16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR17</name>
        <description>Event Mask on line 17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR18</name>
        <description>Event Mask on line 18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR19</name>
        <description>Event Mask on line 19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR20</name>
        <description>Event Mask on line 20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR21</name>
        <description>Event Mask on line 21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>MR22</name>
        <description>Event Mask on line 22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>RTSR</name>
    <displayName>RTSR</displayName>
    <description>Rising Trigger selection register
    (EXTI_RTSR)</description>
    <addressOffset>0x8</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TR0</name>
        <description>Rising trigger event configuration of
        line 0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR1</name>
        <description>Rising trigger event configuration of
        line 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR2</name>
        <description>Rising trigger event configuration of
        line 2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR3</name>
        <description>Rising trigger event configuration of
        line 3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR4</name>
        <description>Rising trigger event configuration of
        line 4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR5</name>
        <description>Rising trigger event configuration of
        line 5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR6</name>
        <description>Rising trigger event configuration of
        line 6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR7</name>
        <description>Rising trigger event configuration of
        line 7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR8</name>
        <description>Rising trigger event configuration of
        line 8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR9</name>
        <description>Rising trigger event configuration of
        line 9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR10</name>
        <description>Rising trigger event configuration of
        line 10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR11</name>
        <description>Rising trigger event configuration of
        line 11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR12</name>
        <description>Rising trigger event configuration of
        line 12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR13</name>
        <description>Rising trigger event configuration of
        line 13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR14</name>
        <description>Rising trigger event configuration of
        line 14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR15</name>
        <description>Rising trigger event configuration of
        line 15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR16</name>
        <description>Rising trigger event configuration of
        line 16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR17</name>
        <description>Rising trigger event configuration of
        line 17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR18</name>
        <description>Rising trigger event configuration of
        line 18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR19</name>
        <description>Rising trigger event configuration of
        line 19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR20</name>
        <description>Rising trigger event configuration of
        line 20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR21</name>
        <description>Rising trigger event configuration of
        line 21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR22</name>
        <description>Rising trigger event configuration of
        line 22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>FTSR</name>
    <displayName>FTSR</displayName>
    <description>Falling Trigger selection register
    (EXTI_FTSR)</description>
    <addressOffset>0xC</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>TR0</name>
        <description>Falling trigger event configuration of
        line 0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR1</name>
        <description>Falling trigger event configuration of
        line 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR2</name>
        <description>Falling trigger event configuration of
        line 2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR3</name>
        <description>Falling trigger event configuration of
        line 3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR4</name>
        <description>Falling trigger event configuration of
        line 4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR5</name>
        <description>Falling trigger event configuration of
        line 5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR6</name>
        <description>Falling trigger event configuration of
        line 6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR7</name>
        <description>Falling trigger event configuration of
        line 7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR8</name>
        <description>Falling trigger event configuration of
        line 8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR9</name>
        <description>Falling trigger event configuration of
        line 9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR10</name>
        <description>Falling trigger event configuration of
        line 10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR11</name>
        <description>Falling trigger event configuration of
        line 11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR12</name>
        <description>Falling trigger event configuration of
        line 12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR13</name>
        <description>Falling trigger event configuration of
        line 13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR14</name>
        <description>Falling trigger event configuration of
        line 14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR15</name>
        <description>Falling trigger event configuration of
        line 15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR16</name>
        <description>Falling trigger event configuration of
        line 16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR17</name>
        <description>Falling trigger event configuration of
        line 17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR18</name>
        <description>Falling trigger event configuration of
        line 18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR19</name>
        <description>Falling trigger event configuration of
        line 19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR20</name>
        <description>Falling trigger event configuration of
        line 20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR21</name>
        <description>Falling trigger event configuration of
        line 21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>TR22</name>
        <description>Falling trigger event configuration of
        line 22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>SWIER</name>
    <displayName>SWIER</displayName>
    <description>Software interrupt event register
    (EXTI_SWIER)</description>
    <addressOffset>0x10</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>SWIER0</name>
        <description>Software Interrupt on line
        0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER1</name>
        <description>Software Interrupt on line
        1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER2</name>
        <description>Software Interrupt on line
        2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER3</name>
        <description>Software Interrupt on line
        3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER4</name>
        <description>Software Interrupt on line
        4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER5</name>
        <description>Software Interrupt on line
        5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER6</name>
        <description>Software Interrupt on line
        6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER7</name>
        <description>Software Interrupt on line
        7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER8</name>
        <description>Software Interrupt on line
        8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER9</name>
        <description>Software Interrupt on line
        9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER10</name>
        <description>Software Interrupt on line
        10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER11</name>
        <description>Software Interrupt on line
        11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER12</name>
        <description>Software Interrupt on line
        12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER13</name>
        <description>Software Interrupt on line
        13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER14</name>
        <description>Software Interrupt on line
        14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER15</name>
        <description>Software Interrupt on line
        15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER16</name>
        <description>Software Interrupt on line
        16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER17</name>
        <description>Software Interrupt on line
        17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER18</name>
        <description>Software Interrupt on line
        18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER19</name>
        <description>Software Interrupt on line
        19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER20</name>
        <description>Software Interrupt on line
        20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER21</name>
        <description>Software Interrupt on line
        21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>SWIER22</name>
        <description>Software Interrupt on line
        22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
  <register>
    <name>PR</name>
    <displayName>PR</displayName>
    <description>Pending register (EXTI_PR)</description>
    <addressOffset>0x14</addressOffset>
    <size>0x20</size>
    <access>read-write</access>
    <resetValue>0x00000000</resetValue>
    <fields>
      <field>
        <name>PR0</name>
        <description>Pending bit 0</description>
        <bitOffset>0</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR1</name>
        <description>Pending bit 1</description>
        <bitOffset>1</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR2</name>
        <description>Pending bit 2</description>
        <bitOffset>2</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR3</name>
        <description>Pending bit 3</description>
        <bitOffset>3</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR4</name>
        <description>Pending bit 4</description>
        <bitOffset>4</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR5</name>
        <description>Pending bit 5</description>
        <bitOffset>5</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR6</name>
        <description>Pending bit 6</description>
        <bitOffset>6</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR7</name>
        <description>Pending bit 7</description>
        <bitOffset>7</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR8</name>
        <description>Pending bit 8</description>
        <bitOffset>8</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR9</name>
        <description>Pending bit 9</description>
        <bitOffset>9</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR10</name>
        <description>Pending bit 10</description>
        <bitOffset>10</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR11</name>
        <description>Pending bit 11</description>
        <bitOffset>11</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR12</name>
        <description>Pending bit 12</description>
        <bitOffset>12</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR13</name>
        <description>Pending bit 13</description>
        <bitOffset>13</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR14</name>
        <description>Pending bit 14</description>
        <bitOffset>14</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR15</name>
        <description>Pending bit 15</description>
        <bitOffset>15</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR16</name>
        <description>Pending bit 16</description>
        <bitOffset>16</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR17</name>
        <description>Pending bit 17</description>
        <bitOffset>17</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR18</name>
        <description>Pending bit 18</description>
        <bitOffset>18</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR19</name>
        <description>Pending bit 19</description>
        <bitOffset>19</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR20</name>
        <description>Pending bit 20</description>
        <bitOffset>20</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR21</name>
        <description>Pending bit 21</description>
        <bitOffset>21</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
      <field>
        <name>PR22</name>
        <description>Pending bit 22</description>
        <bitOffset>22</bitOffset>
        <bitWidth>1</bitWidth>
      </field>
    </fields>
  </register>
</registers>
